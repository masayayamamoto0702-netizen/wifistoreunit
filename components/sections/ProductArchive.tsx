// SUBSYS_02 — EQUIPMENT ARCHIVE DATABASE

const FILES = [
  {
    id:    "ARCH-001",
    cls:   "ACCESSIBLE",
    name:  "ARCHIVE &\nFUTURE VINTAGE",
    tag:   "USED / DEADSTOCK / HERITAGE",
    fill:  72,
    notes: "DEADSTOCK ERA ITEMS, ARCHIVAL PIECES, FUTURE VINTAGE SELECTIONS",
  },
  {
    id:    "ARCH-002",
    cls:   "ACCESSIBLE",
    name:  "TECH &\nUNDERGROUND GEAR",
    tag:   "FUNCTIONAL / TACTICAL / EDGE",
    fill:  58,
    notes: "TECHNICAL OUTERWEAR, UTILITY SYSTEMS, UNDERGROUND TACTICAL ITEMS",
  },
  {
    id:    "ARCH-003",
    cls:   "ACCESSIBLE",
    name:  "GLOBAL OVERSEAS\nSELECTION",
    tag:   "EU / US / ASIA / RARE IMPORTS",
    fill:  84,
    notes: "INTERNATIONAL RARE FINDS, OVERSEAS ARCHIVE, IMPORT SELECTIONS",
  },
  {
    id:    "ARCH-004",
    cls:   "ACCESSIBLE",
    name:  "SOUND &\nINTERNET CULTURE",
    tag:   "MUSIC / NET / SUBCULTURE",
    fill:  45,
    notes: "MUSIC CULTURE ITEMS, INTERNET ARTIFACTS, SUBCULTURAL MEMORABILIA",
  },
];

export default function ProductArchive() {
  return (
    <section id="archive" className="sys-section" style={{ paddingBottom: 100 }}>
      <div className="sys-inner">

        <div className="sys-section-header">
          <span className="sys-section-id">[SUBSYS_02]</span>
          <span className="sys-section-title">EQUIPMENT ARCHIVE DATABASE</span>
          <div className="sys-section-line" />
          <span className="sys-section-tag">RECORDS: 4 CATEGORIES</span>
        </div>

        {/* Column headers */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "100px 80px 1fr 80px",
          gap: 20,
          padding: "10px 20px",
          background: "rgba(255,140,0,0.04)",
          borderBottom: "1px solid rgba(255,140,0,0.10)",
          marginBottom: 2,
          fontFamily: "var(--mono)",
          fontSize: 9,
          letterSpacing: "0.25em",
          color: "var(--txt-lo)",
        }}>
          <span>FILE_ID</span>
          <span>ACCESS</span>
          <span>CATEGORY</span>
          <span>LOAD</span>
        </div>

        <div className="archive-grid">
          {FILES.map(({ id, cls, name, tag, fill, notes }) => (
            <div key={id} className="archive-card">
              <div className="archive-card-id">
                {id}
                <span className="archive-card-class">{cls}</span>
              </div>
              <p className="archive-card-name">{name}</p>
              <p className="archive-card-meta">{tag}</p>
              <p style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.12em", color: "var(--txt-lo)", lineHeight: 1.7, marginTop: 12 }}>
                {notes}
              </p>
              <div className="archive-card-bar">
                <div className="archive-card-fill" style={{ width: `${fill}%` }} />
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--txt-lo)", letterSpacing: "0.15em", marginTop: 4 }}>
                STOCK LEVEL: {fill}%
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
