"use client";

import { Suspense, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

// ── TRON grid shaders ─────────────────────────────────────────────────────────

const tronVert = /* glsl */`
  varying vec3 vWorldPos;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const tronFrag = /* glsl */`
  uniform float uTime;
  varying vec3 vWorldPos;

  float gridLine(vec2 p, float size) {
    vec2 g = abs(fract(p / size - 0.5) - 0.5) / fwidth(p / size);
    return 1.0 - min(min(g.x, g.y), 1.0);
  }

  void main() {
    vec2  p  = vWorldPos.xz;

    // Coarse grid (4-unit) + fine grid (1-unit)
    float g1   = gridLine(p, 4.0);
    float g2   = gridLine(p, 1.0) * 0.28;
    float grid = max(g1, g2);

    // Soft wide glow around coarse lines
    float glow = g1 * 0.55;

    // Distance fade — fades out far and right under camera
    float dist = length(p);
    float fade = (1.0 - smoothstep(7.0, 28.0, dist))
               * smoothstep(0.3, 2.5, dist);

    // Scan pulse travelling away from viewer
    float raw  = sin(vWorldPos.z * 0.7 - uTime * 1.8) * 0.5 + 0.5;
    float scan = pow(max(raw, 0.0), 8.0) * 0.55;

    vec3 lineCol = vec3(0.00, 0.88, 1.00);   // bright cyan
    vec3 glowCol = vec3(0.00, 0.28, 0.65);   // deep blue glow
    vec3 scanCol = vec3(0.30, 0.96, 1.00);   // near-white scan

    vec3  col = lineCol * grid + glowCol * glow + scanCol * scan;
    float a   = (grid + glow * 0.22 + scan * 0.32) * fade;

    gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
  }
`;

// ── TRON floor grid ───────────────────────────────────────────────────────────

function TronGrid() {
  const matRef   = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0.0 } }), []);

  useFrame(({ clock }) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.8, 0]}>
      <planeGeometry args={[60, 60, 2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={tronVert}
        fragmentShader={tronFrag}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

// ── STL logo ──────────────────────────────────────────────────────────────────

function WifiSTL() {
  const groupRef = useRef<THREE.Group>(null);
  const rawGeo   = useLoader(STLLoader, "/wifistoreunit.stl");

  const { geo, modelScale } = useMemo(() => {
    const g = (rawGeo as THREE.BufferGeometry).clone();

    g.computeBoundingBox();
    const center = new THREE.Vector3();
    g.boundingBox!.getCenter(center);
    g.translate(-center.x, -center.y, -center.z);

    g.computeBoundingBox();
    const size = new THREE.Vector3();
    g.boundingBox!.getSize(size);
    const scale = 5.2 / Math.max(size.x, size.y, size.z);

    g.computeVertexNormals();

    return { geo: g, modelScale: scale };
  }, [rawGeo]);

  useEffect(() => () => { geo.dispose(); }, [geo]);

  useFrame(({ clock }, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.85;
    groupRef.current.position.y  = 1.1 + Math.sin(clock.elapsedTime * 0.5) * 0.12;
  });

  return (
    <group ref={groupRef} position={[0, 0.8, 0]}>
      <mesh
        geometry={geo}
        scale={[modelScale, modelScale, modelScale]}
        onClick={() => window.open("https://wifistoreunit.stores.jp/", "_blank", "noopener,noreferrer")}
        onPointerOver={() => { document.body.style.cursor = "pointer"; }}
        onPointerOut={() =>  { document.body.style.cursor = "auto"; }}
      >
        <meshStandardMaterial
          color="#d8d8d8"
          emissive="#aaaaaa"
          emissiveIntensity={0.12}
          metalness={0.96}
          roughness={0.04}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

// ── Watchtower searchlight ────────────────────────────────────────────────────

function WatchtowerLight() {
  const lightRef = useRef<THREE.SpotLight>(null);
  const { scene } = useThree();

  useEffect(() => {
    const light = lightRef.current;
    if (!light) return;
    // SpotLight.target must be in the scene for it to work
    scene.add(light.target);
    return () => { scene.remove(light.target); };
  }, [scene]);

  useFrame(({ clock }) => {
    const light = lightRef.current;
    if (!light) return;
    const t = clock.elapsedTime;

    // Irregular sweep speed — occasional slow pause, then continues
    // Creates natural "searchlight passing over" moments
    const angle = t * 0.42 + Math.sin(t * 0.27) * 1.1;

    const sweepRadius = 5.5;
    light.target.position.set(
      Math.cos(angle) * sweepRadius,
      0.8,
      Math.sin(angle) * sweepRadius
    );
    light.target.updateMatrixWorld();
  });

  return (
    // Tower is high above and slightly behind — fixed position
    <spotLight
      ref={lightRef}
      position={[0, 10, -5]}
      color="#cce8ff"
      intensity={220}
      distance={26}
      angle={Math.PI / 20}   // narrow 9° cone
      penumbra={0.28}
      decay={2}
    />
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", background: "#000", overflow: "hidden" }}>

      <Canvas
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [0, 1.5, 8], fov: 72, near: 0.1, far: 60 } as any}
        style={{ background: "#000" }}
      >
        <ambientLight color="#ffffff" intensity={0.6} />
        <pointLight position={[ 4,  5,  6]} color="#ffffff" intensity={55} distance={18} decay={2} />
        <pointLight position={[-4,  2, -5]} color="#cce0ff" intensity={35} distance={15} decay={2} />
        <pointLight position={[ 0, -2,  5]} color="#e8e8ff" intensity={30} distance={12} decay={2} />
        <pointLight position={[ 0,  4,  0]} color="#ffffff" intensity={20} distance={10} decay={2} />
        {/* Cyan TRON light from below — ties the silver model to the grid */}
        <pointLight position={[0, -1.5, 2]} color="#00d4ff" intensity={8} distance={8} decay={2} />

        {/* Watchtower searchlight — sweeps 360°, occasionally spotlights the logo */}
        <WatchtowerLight />

        <TronGrid />

        <Suspense fallback={null}>
          <WifiSTL />
        </Suspense>
      </Canvas>

      {/* Cinematic edge vignette */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 18%, rgba(0,0,0,0.88) 100%)",
      }} />

      {/* UI Overlay */}
      <div className="hero-overlay">
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="corner-bl" />
        <div className="corner-br" />
        <div className="hero-scan-line" />

        <div className="hero-panel hero-panel--tl">
          <div className="hero-label">WIFI.SYS // NETWORK INTERFACE</div>
          <div className="hero-value">NODE: GLOBAL_MESH_01&nbsp;&nbsp;v1.0.4</div>
          <div className="hero-active">
            <span className="status-dot" />
            SYSTEM ACTIVE
          </div>
        </div>

        <div className="hero-panel hero-panel--tr">
          <div className="hero-value">LAT&nbsp;35.6762°N&nbsp;/&nbsp;LNG&nbsp;139.6503°E</div>
          <div className="hero-value">FREQ:&nbsp;2.4GHz&nbsp;/&nbsp;5.8GHz</div>
          <div className="hero-active-left">
            SIG&nbsp;
            <span className="signal-bars">
              <span /><span /><span /><span /><span />
            </span>
          </div>
        </div>

        <div className="hero-panel hero-panel--bl">
          <div className="hero-value">NODES&nbsp;DETECTED:&nbsp;<span style={{ color: "#00ff41" }}>847</span></div>
          <div className="hero-value">AUTHENTICATED:&nbsp;<span style={{ color: "var(--amber)" }}>1</span></div>
        </div>

        <div className="hero-panel hero-panel--br">
          <div className="hero-value">FREQ&nbsp;SWEEP:&nbsp;<span style={{ color: "#00b4ff" }}>ACTIVE</span></div>
          <div className="hero-value">ENCRYPTION:&nbsp;<span style={{ color: "#00ff41" }}>AES-256</span></div>
        </div>
      </div>

    </div>
  );
}
