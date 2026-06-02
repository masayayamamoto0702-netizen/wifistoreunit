"use client";

// SUBSYS_04 — NODE ACCESS TERMINAL

export default function NodeAccess() {
  return (
    <footer id="node" className="node-section">
      <div className="sys-inner">

        <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.3em", color: "var(--txt-lo)", marginBottom: 48, display: "flex", alignItems: "center", gap: 16 }}>
          [SUBSYS_04]
          <span style={{ color: "var(--amber)" }}>NODE ACCESS TERMINAL</span>
          <div style={{ flex: 1, height: 1, background: "rgba(255,140,0,0.10)" }} />
          <span>NETWORK: GLOBAL_MESH</span>
        </div>

        <div className="node-grid">

          {/* Left: system data */}
          <div>
            <div className="node-col-title">SYSTEM INFO</div>
            <div className="node-sys-line">SYSTEM&nbsp;&nbsp;<span className="hi">VER. 1.0.4</span></div>
            <div className="node-sys-line">BUILD&nbsp;&nbsp;&nbsp;<span className="hi">2024.WFI.∞</span></div>
            <div className="node-sys-line">NODE&nbsp;&nbsp;&nbsp;&nbsp;<span className="hi">GLOBAL_MESH_01</span></div>
            <div className="node-sys-line">STATUS&nbsp;&nbsp;<span className="green">ONLINE</span></div>
            <div className="node-sys-line">UPTIME&nbsp;&nbsp;<span className="hi">∞ CONTINUOUS</span></div>
            <div className="node-sys-line" style={{ marginTop: 16 }}>FREQ&nbsp;&nbsp;&nbsp;&nbsp;<span className="hi">2.4GHz / 5.8GHz</span></div>
            <div className="node-sys-line">SIGNAL&nbsp;&nbsp;<span className="green">████████████ 100%</span></div>
          </div>

          {/* Center: brand */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div className="node-brand-center">
              <div className="node-brand-name">WIFI STORE UNIT</div>
              <div className="node-brand-sub">W · I · F · I</div>
              <div className="node-freq-display">
                2.4<span style={{ fontSize: 12, opacity: 0.5 }}>GHz</span>
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.2em", color: "var(--txt-lo)", marginTop: 6 }}>
                ALWAYS_ON // ALWAYS_TRANSMITTING
              </div>
            </div>
          </div>

          {/* Right: coordinates + Instagram */}
          <div>
            <div className="node-col-title">NODE COORDINATES</div>
            <div className="node-map">LAT &nbsp;35.6762° N</div>
            <div className="node-map">LNG &nbsp;139.6503° E</div>
            <div className="node-map">ALT &nbsp;CLASSIFIED</div>
            <div className="node-map" style={{ marginTop: 16 }}>ZONE &nbsp;URBAN_NETWORK</div>
            <div className="node-map">MESH &nbsp;GLOBAL_01</div>
            <div className="node-map">ENC &nbsp;&nbsp;AES-256-GCM</div>

            <div style={{ marginTop: 24 }}>
              <div className="node-col-title">ACCESS</div>

              {/* Shop link */}
              <a
                href="https://wifistoreunit.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 8,
                  marginBottom: 8,
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: "#000",
                  background: "var(--amber)",
                  textDecoration: "none",
                  padding: "9px 14px",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                ENTER SHOP
              </a>

              {/* Instagram link */}
              <a
                href="https://www.instagram.com/wifi.store.unit"
                target="_blank"
                rel="noopener noreferrer"
                className="node-ig-link"
                style={{ marginTop: 8 }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                @WIFI.STORE.UNIT
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="node-bottom">
          <p className="node-copy">© 2024 WIFI STORE UNIT — ALL FREQUENCIES RESERVED — SYSTEM_ID: WSU-NET-001</p>
          <nav className="node-links">
            <a href="#" className="node-link">ARCHIVE</a>
            <a href="#" className="node-link">CONTACT</a>
            <a href="#" className="node-link">TERMS</a>
            <a href="#" className="node-link">FREQUENCY MAP</a>
          </nav>
        </div>

        <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.2em", color: "var(--txt-lo)", borderTop: "1px solid rgba(255,255,255,0.03)", padding: "12px 0", opacity: 0.5 }}>
          END_OF_TRANSMISSION // WIFI_STORE_UNIT.SYS // NODE: GLOBAL_MESH_01 // STATUS: ONLINE
        </div>

      </div>
    </footer>
  );
}
