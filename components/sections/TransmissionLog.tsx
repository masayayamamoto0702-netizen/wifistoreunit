"use client";

// SUBSYS_03 — LIVE TRANSMISSION BROADCAST INTERFACE

import { useState, useEffect } from "react";

const LOG_ENTRIES = [
  { time: "00:00:01", type: "INIT",  msg: "WIFI STORE UNIT — NETWORK BROADCAST INITIATED" },
  { time: "00:00:04", type: "AUTH",  msg: "SIGNAL AUTHENTICATED — NODE HANDSHAKE COMPLETE" },
  { time: "00:00:09", type: "TX",    msg: "TRANSMITTING: ARCHIVE & FUTURE VINTAGE — CATALOG OPEN" },
  { time: "00:00:14", type: "TX",    msg: "TRANSMITTING: TECH & UNDERGROUND GEAR — CATALOG OPEN" },
  { time: "00:00:21", type: "ALERT", msg: "NEW NODE CONNECTED — IDENTITY: VISITOR_0847" },
  { time: "00:00:28", type: "TX",    msg: "OVERSEAS SELECTION — GLOBAL IMPORT DATA LOADING" },
  { time: "00:00:35", type: "SYS",   msg: "SIGNAL STABLE — ENCRYPTION PROTOCOL ACTIVE" },
];

const WAVE_COUNT = 32;

export default function TransmissionLog() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 120);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="transmission" className="sys-section" style={{ paddingBottom: 100 }}>
      <div className="sys-inner">

        <div className="sys-section-header">
          <span className="sys-section-id">[SUBSYS_03]</span>
          <span className="sys-section-title">LIVE TRANSMISSION LOG</span>
          <div className="sys-section-line" />
          <span className="sys-section-tag" style={{ color: "var(--red)" }}>● BROADCASTING</span>
        </div>

        {/* SoundCloud stream */}
        <div style={{
          border: "1px solid rgba(255,140,0,0.15)",
          marginBottom: 40,
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 16px",
            borderBottom: "1px solid rgba(255,140,0,0.10)",
            fontFamily: "var(--mono)",
            fontSize: 9,
            letterSpacing: "0.26em",
            color: "var(--txt-lo)",
            background: "rgba(255,140,0,0.03)",
          }}>
            <span className="status-dot red" />
            <span style={{ color: "var(--amber)" }}>AUDIO_STREAM</span>
            <span style={{ opacity: 0.4 }}>{"//"}</span>
            <span>SOUNDCLOUD</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,140,0,0.08)" }} />
            <span>WSU-FM-001</span>
          </div>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/1937492&color=%23ff8c00&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
            style={{ display: "block" }}
          />
        </div>

        {/* Broadcast header */}
        <div className="transmission-header">
          <div className="live-badge">
            <span className="status-dot red" />
            LIVE
          </div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.2em", color: "var(--txt-lo)" }}>
            CHANNEL: WSU-FM-001&nbsp;&nbsp;//&nbsp;&nbsp;FREQ: 2.412 GHz&nbsp;&nbsp;//&nbsp;&nbsp;ENC: AES-256
          </div>
          <div className="waveform" style={{ marginLeft: "auto" }}>
            {Array.from({ length: WAVE_COUNT }).map((_, i) => {
              const h = 4 + Math.abs(Math.sin((i + tick) * 0.45) * 24);
              return (
                <div
                  key={i}
                  className="waveform-bar"
                  style={{ height: h, opacity: 0.4 + (h / 28) * 0.6 }}
                />
              );
            })}
          </div>
        </div>

        {/* Body */}
        <div className="transmission-body">
          <div className="transmission-broadcast">
            <p className="transmission-text">
              <strong>THIS IS A BROADCAST FROM THE UNDERGROUND NETWORK.</strong>
              <br /><br />
              WIFI STORE UNIT IS NOT A STORE. IT IS AN <strong>ACCESS POINT</strong>
              &nbsp;— A FREQUENCY THAT CONNECTS THOSE WHO EXIST AT THE INTERSECTION
              OF FASHION, TECHNOLOGY, AND URBAN CULTURE.
              <br /><br />
              WE ARCHIVE THE SIGNALS THAT OTHERS HAVE LOST. WE TRANSMIT PIECES
              FROM THE FORGOTTEN FUTURE — <strong>DEADSTOCK REMNANTS, OVERSEAS ARTIFACTS,
              UNDERGROUND EQUIPMENT</strong> — ITEMS THAT CARRY FREQUENCY.
              <br /><br />
              THE NETWORK IS NOT VISIBLE. IT RUNS BENEATH THE STREETS, THROUGH
              THE WALLS, ABOVE THE SKYLINE. IT IS EVERYWHERE AND NOWHERE.
              <br /><br />
              <strong>IF YOU CAN RECEIVE THIS SIGNAL — YOU ARE ALREADY CONNECTED.</strong>
            </p>
          </div>

          <div className="transmission-stats">
            {[
              { label: "SIGNAL STRENGTH", value: "████████░░ 82%", fill: "82%" },
              { label: "ACTIVE NODES",    value: "847 DETECTED",   fill: "61%" },
              { label: "UPTIME",          value: "∞ CONTINUOUS",   fill: "100%" },
              { label: "BANDWIDTH",       value: "5.8GHz / OPEN",  fill: "75%" },
              { label: "ENCRYPTION",      value: "AES-256 ACTIVE", fill: "100%" },
            ].map(({ label, value, fill }) => (
              <div key={label} className="stat-row">
                <div className="stat-label">{label}</div>
                <div className="stat-value">{value}</div>
                <div className="stat-bar"><div className="stat-bar-fill" style={{ width: fill }} /></div>
              </div>
            ))}
          </div>
        </div>

        {/* Log entries */}
        <div className="log-entries">
          <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.25em", color: "var(--txt-lo)", padding: "12px 20px", display: "flex", alignItems: "center", gap: 12 }}>
            TRANSMISSION LOG
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.04)" }} />
          </div>

          {LOG_ENTRIES.map((e, i) => (
            <div key={i} className="log-entry">
              <span className="log-time">[{e.time}]</span>
              <span className="log-type">{e.type}</span>
              <span className="log-msg">{e.msg}</span>
            </div>
          ))}

          <div className="log-entry" style={{ opacity: 0.5 }}>
            <span className="log-time" style={{ animation: "blink 1s step-end infinite" }}>[LIVE]</span>
            <span className="log-type">SYS</span>
            <span className="log-msg" style={{ color: "var(--green)" }}>
              SIGNAL ACTIVE — AWAITING NEXT TRANSMISSION...
              <span style={{ display: "inline-block", width: "0.5em", height: "1em", background: "var(--green)", marginLeft: 4, verticalAlign: "middle", animation: "cursor-blink 0.9s step-end infinite" }} />
            </span>
          </div>
        </div>

      </div>

      {/* WSU UNIT CODE — 全幅ターミナルゲーム */}
      <div style={{ borderTop: "1px solid rgba(255,140,0,0.15)", marginTop: 40 }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 40px",
          borderBottom: "1px solid rgba(255,140,0,0.10)",
          fontFamily: "var(--mono)",
          fontSize: 9,
          letterSpacing: "0.26em",
          color: "var(--txt-lo)",
          background: "rgba(255,140,0,0.03)",
        }}>
          <span className="status-dot" style={{ background: "var(--green)" }} />
          <span style={{ color: "var(--amber)" }}>WSU_UNIT_CODE</span>
          <span style={{ opacity: 0.4 }}>{"//"}</span>
          <span>INTERACTIVE TERMINAL</span>
          <div style={{ flex: 1, height: 1, background: "rgba(255,140,0,0.08)" }} />
          <span>ENCRYPTED</span>
        </div>
        <iframe
          src="/unit-code.html"
          width="100%"
          height="620"
          style={{ display: "block", border: "none" }}
          title="WSU UNIT CODE"
        />
      </div>

    </section>
  );
}
