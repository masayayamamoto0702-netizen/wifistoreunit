"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "SIGNAL",       href: "#signal" },
  { label: "ARCHIVE",      href: "#archive" },
  { label: "TRANSMISSION", href: "#transmission" },
  { label: "NODE",         href: "#node" },
];

export default function SystemNav() {
  const [active, setActive] = useState("");
  const [time,   setTime]   = useState("");

  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setTime([n.getHours(), n.getMinutes(), n.getSeconds()]
        .map(v => String(v).padStart(2, "0")).join(":"));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); },
      { threshold: 0.35 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sys-nav">
      <div className="sys-nav-brand">
        WIFI<span style={{ color: "rgba(255,140,0,0.5)" }}>.</span>SYS&nbsp;&nbsp;
        <span style={{ opacity: 0.4 }}>v1.0.4</span>
      </div>

      <div className="sys-nav-links">
        {NAV_ITEMS.map(item => (
          <a
            key={item.label}
            href={item.href}
            className={`sys-nav-link${active === item.href.slice(1) ? " active" : ""}`}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="sys-nav-right">
        <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em", color: "var(--txt-lo)" }}>
          {time}
        </span>
        <div className="sys-nav-status">
          <span className="status-dot green" />
          ONLINE
        </div>
      </div>
    </nav>
  );
}
