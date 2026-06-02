import dynamic from "next/dynamic";
import BootSequence    from "@/components/system/BootSequence";
import SystemNav       from "@/components/system/SystemNav";
import ProductCarousel from "@/components/sections/ProductCarousel";
import TransmissionLog from "@/components/sections/TransmissionLog";
import NodeAccess      from "@/components/sections/NodeAccess";

const HeroSection = dynamic(
  () => import("@/components/hero/HeroSection"),
  { ssr: false }
);

export default function Page() {
  return (
    <>
      {/* ── CRT Overlays (global, fixed) ── */}
      <div className="crt-scanlines" aria-hidden="true" />
      <div className="crt-sweep"     aria-hidden="true" />
      <div className="crt-vignette"  aria-hidden="true" />
      <div className="crt-flicker"   aria-hidden="true" />

      {/* ── Entry Experience ── */}
      <BootSequence />

      {/* ── Fixed Terminal Navigation ── */}
      <SystemNav />

      {/* ── Main Interface ── */}
      <main>
        <HeroSection />
        <ProductCarousel />
        <TransmissionLog />
        <NodeAccess />
      </main>
    </>
  );
}
