// SUBSYS_01 — NETWORK INTELLIGENCE BRIEF

const TRANSMISSIONS = [
  { id: "TX-01", freq: "2412 MHz", phrase: "WORLD IS FASHION INTERFACE" },
  { id: "TX-02", freq: "2437 MHz", phrase: "WE INVENT FUTURE ICONS" },
  { id: "TX-03", freq: "5180 MHz", phrase: "WAVE INTERFACE FREQUENCY INDEX" },
  { id: "TX-04", freq: "5220 MHz", phrase: "WHAT INSPIRES FUTURE INDIVIDUALS" },
];

export default function SignalBrief() {
  return (
    <section id="signal" className="sys-section" style={{ paddingBottom: 100 }}>
      <div className="sys-inner">

        <div className="sys-section-header">
          <span className="sys-section-id">[SUBSYS_01]</span>
          <span className="sys-section-title">NETWORK INTELLIGENCE BRIEF</span>
          <div className="sys-section-line" />
          <span className="sys-section-tag">CLASSIFICATION: OPEN</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 60, alignItems: "start" }}>

          {/* Left: big headline + decode list */}
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.25em", color: "var(--txt-lo)", marginBottom: 24 }}>
              FILE_REF: WFI-BRIEF-001&nbsp;&nbsp;//&nbsp;&nbsp;DECRYPTED_INTEL
            </div>

            <h2 className="brief-headline">
              WIRELESS<br />FASHION<br />INSTITUTE
            </h2>

            <div className="brief-meta">
              <div className="brief-meta-item">ORIGIN <span>URBAN_NETWORK</span></div>
              <div className="brief-meta-item">SIGNAL <span>ENCRYPTED</span></div>
              <div className="brief-meta-item">STATUS <span>ACTIVE</span></div>
              <div className="brief-meta-item">NODES  <span>GLOBAL</span></div>
            </div>

            <div className="decode-header">▶ DECODED TRANSMISSIONS</div>

            <div className="decode-list">
              {TRANSMISSIONS.map(({ id, freq, phrase }) => (
                <div key={id} className="decode-row">
                  <span className="decode-id">{id}</span>
                  <span className="decode-freq">{freq}</span>
                  <span className="decode-phrase">{phrase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: system window */}
          <div>
            <div className="sys-window">
              <div className="sys-window-header">
                <span className="win-dot red" />
                <span className="win-dot amber" />
                <span className="win-dot green" />
                <span style={{ marginLeft: 8 }}>INTEL_REPORT.SYS</span>
              </div>

              <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { k: "ENTITY",    v: "WIFI STORE UNIT" },
                  { k: "TYPE",      v: "MULTI-SIGNAL ARCHIVE" },
                  { k: "LOCATION",  v: "35.6762°N, 139.6503°E" },
                  { k: "FOUNDED",   v: "CLASSIFIED" },
                  { k: "MISSION",   v: "TRANSMIT THE SIGNAL" },
                  { k: "PROTOCOL",  v: "OPEN_ACCESS" },
                  { k: "NODES",     v: "GLOBAL_MESH" },
                  { k: "CLEARANCE", v: "LEVEL 0 — PUBLIC" },
                ].map(({ k, v }) => (
                  <div key={k} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", paddingBottom: 12 }}>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.25em", color: "var(--txt-lo)", marginBottom: 4 }}>{k}</div>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--amber)" }}>{v}</div>
                  </div>
                ))}
                <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.2em", color: "var(--green)", display: "flex", alignItems: "center", gap: 8 }}>
                  <span className="status-dot green" />
                  SIGNAL ACTIVE — BROADCASTING
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
