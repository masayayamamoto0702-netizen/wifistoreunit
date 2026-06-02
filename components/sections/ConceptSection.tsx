const meanings = [
  { n: "01", phrase: "WORLD IS FASHION INTERFACE" },
  { n: "02", phrase: "WE INVENT FUTURE ICONS" },
  { n: "03", phrase: "WAVE INTERFACE FREQUENCY INDEX" },
  { n: "04", phrase: "WHAT INSPIRES FUTURE INDIVIDUALS" },
];

export default function ConceptSection() {
  return (
    <section className="concept-section">
      <div className="concept-inner">

        <p className="section-eyebrow">CONCEPT_01 ── INSTITUTE BRIEF</p>

        <h2 className="concept-heading">
          <span>WIRELESS</span>
          <span>FASHION</span>
          <span>INSTITUTE</span>
        </h2>

        <div className="concept-divider" />

        <p className="decode-label">W · I · F · I &nbsp;&nbsp; D E C O D E D</p>

        <div className="meanings-list">
          {meanings.map(({ n, phrase }) => (
            <div key={n} className="meaning-row">
              <span className="meaning-num">{n}</span>
              <span className="meaning-sep">──</span>
              <span className="meaning-wifi">W·I·F·I</span>
              <span className="meaning-sep">──</span>
              <span className="meaning-phrase">{phrase}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
