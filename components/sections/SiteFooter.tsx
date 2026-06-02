export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-top">
          {/* Left — system info */}
          <div className="footer-sys">
            <div><span className="footer-sys-highlight">SYSTEM</span> VER. 1.0.4</div>
            <div>BUILD&nbsp;&nbsp;2024.WFI.∞</div>
            <div>NODE&nbsp;&nbsp;&nbsp;GLOBAL_MESH_01</div>
            <div>STATUS <span className="footer-sys-highlight">ONLINE</span></div>
          </div>

          {/* Center — brand */}
          <div className="footer-brand">
            <p className="footer-brand-name">WIFI STORE UNIT</p>
            <p className="footer-brand-sub">W · I · F · I</p>
          </div>

          {/* Right — signal */}
          <div className="footer-signal">
            <div>FREQ&nbsp;&nbsp;2.4GHz / 5GHz</div>
            <div>SIGNAL
              <span className="footer-signal-bar">
                <span style={{ height: 6 }} />
                <span style={{ height: 9 }} />
                <span style={{ height: 12 }} />
                <span style={{ height: 15 }} />
              </span>
            </div>
            <div>LAT&nbsp;&nbsp;&nbsp;35.6762° N</div>
            <div>LNG&nbsp;&nbsp;&nbsp;139.6503° E</div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2024 WIFI STORE UNIT — ALL FREQUENCIES RESERVED
          </p>
          <nav className="footer-links">
            <a href="#" className="footer-link">ARCHIVE</a>
            <a href="#" className="footer-link">CONTACT</a>
            <a href="#" className="footer-link">TERMS</a>
          </nav>
        </div>

      </div>
    </footer>
  );
}
