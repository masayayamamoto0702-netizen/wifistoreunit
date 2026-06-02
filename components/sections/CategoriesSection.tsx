const categories = [
  {
    n: "01",
    name: "ARCHIVE &\nFUTURE VINTAGE",
    tag: "USED / DEADSTOCK / HERITAGE",
  },
  {
    n: "02",
    name: "TECH &\nUNDERGROUND GEAR",
    tag: "FUNCTIONAL / TACTICAL / EDGE",
  },
  {
    n: "03",
    name: "GLOBAL OVERSEAS\nSELECTION",
    tag: "EU / US / ASIA / RARE IMPORTS",
  },
  {
    n: "04",
    name: "SOUND &\nINTERNET CULTURE",
    tag: "MUSIC / NET / SUBCULTURE ITEMS",
  },
];

export default function CategoriesSection() {
  return (
    <section className="categories-section">
      <div className="categories-inner">

        <div className="categories-header">
          <span className="categories-header-label">SELECT_CATEGORY_02</span>
          <div className="categories-header-line" />
        </div>

        <div className="categories-grid">
          {categories.map(({ n, name, tag }) => (
            <div key={n} className="category-card">
              <span className="category-num">{n} ──</span>
              <p className="category-name" style={{ whiteSpace: "pre-line" }}>
                {name}
              </p>
              <p className="category-tag">{tag}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
