"use client";

import { useState, useEffect, useCallback } from "react";

const LINES: { text: string; cls: string; delay: number }[] = [
  { text: "WIFI_STORE_UNIT.SYS  ──  NETWORK INTERFACE OS  v1.0.4", cls: "title", delay: 0 },
  { text: "", cls: "", delay: 180 },
  { text: "MEMORY TEST ................................ 2048MB OK",    cls: "ok",   delay: 360 },
  { text: "LOADING SIGNAL PROTOCOLS .................. COMPLETE",     cls: "ok",   delay: 560 },
  { text: "NETWORK STACK ............................. INITIALIZED",  cls: "ok",   delay: 760 },
  { text: "", cls: "", delay: 900 },
  { text: "SCANNING LOCAL FREQUENCIES:",                              cls: "warn", delay: 1040 },
  { text: "  2.4GHz  ....  SIGNAL DETECTED  ████████████",           cls: "scan", delay: 1240 },
  { text: "  5.0GHz  ....  SIGNAL DETECTED  █████████",              cls: "scan", delay: 1440 },
  { text: "  60GHz   ....  SIGNAL DETECTED  ██████",                 cls: "scan", delay: 1620 },
  { text: "", cls: "", delay: 1760 },
  { text: "NODE AUTHENTICATION ....................... PASS",         cls: "ok",   delay: 1920 },
  { text: "ENCRYPTION HANDSHAKE ...................... PASS",         cls: "ok",   delay: 2100 },
  { text: "", cls: "", delay: 2240 },
];

const GRANTED_DELAY = 2700;
const DISMISS_DELAY = 4100;

export default function BootSequence() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showGranted,  setShowGranted]  = useState(false);
  const [dismissed,    setDismissed]    = useState(false);

  const dismiss = useCallback(() => setDismissed(true), []);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    LINES.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleCount(c => Math.max(c, i + 1)), LINES[i].delay)
      );
    });

    timers.push(setTimeout(() => setShowGranted(true), GRANTED_DELAY));
    timers.push(setTimeout(() => setDismissed(true),   DISMISS_DELAY));

    return () => timers.forEach(clearTimeout);
  }, []);

  // Skip on any key
  useEffect(() => {
    window.addEventListener("keydown", dismiss);
    return () => window.removeEventListener("keydown", dismiss);
  }, [dismiss]);

  return (
    <div className={`boot-overlay${dismissed ? " hidden" : ""}`} onClick={dismiss}>
      <div className="boot-terminal">

        {LINES.slice(0, visibleCount).map((l, i) => (
          <div key={i} className={`boot-line ${l.cls}`}>
            {l.text || " "}
          </div>
        ))}

        {showGranted && (
          <div className="boot-line granted">
            ACCESS GRANTED ── WELCOME TO THE NETWORK
            {!dismissed && <span className="boot-cursor" />}
          </div>
        )}
      </div>

      {!showGranted && (
        <div className="boot-skip" onClick={dismiss}>[ TAP TO SKIP ]</div>
      )}
    </div>
  );
}
