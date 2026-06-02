"use client";

// SUBSYS_02 — PRODUCT CATALOG TRANSMISSION

const PRODUCTS = [
  { id: "WSU-001", name: "ITEM_001", price: "¥ —",    tag: "ARCHIVE",     status: "LOADING..." },
  { id: "WSU-002", name: "ITEM_002", price: "¥ —",    tag: "DEADSTOCK",   status: "LOADING..." },
  { id: "WSU-003", name: "ITEM_003", price: "¥ —",    tag: "OVERSEAS",    status: "LOADING..." },
  { id: "WSU-004", name: "ITEM_004", price: "¥ —",    tag: "TECH GEAR",   status: "LOADING..." },
  { id: "WSU-005", name: "ITEM_005", price: "¥ —",    tag: "UNDERGROUND", status: "LOADING..." },
  { id: "WSU-006", name: "ITEM_006", price: "¥ —",    tag: "ARCHIVE",     status: "LOADING..." },
];

// Duplicate for seamless infinite loop
const ITEMS = [...PRODUCTS, ...PRODUCTS];

export default function ProductCarousel() {
  return (
    <section id="archive" className="carousel-section">

      <div className="carousel-header">
        <div style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          letterSpacing: "0.3em",
          color: "var(--txt-lo)",
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}>
          [SUBSYS_02]
          <span style={{ color: "var(--amber)" }}>PRODUCT CATALOG</span>
          <div style={{ flex: 1, height: 1, background: "rgba(255,140,0,0.10)" }} />
          <span style={{ color: "var(--txt-lo)" }}>TRANSMITTING DATA...</span>
        </div>

        <div style={{
          fontFamily: "var(--mono)",
          fontSize: 9,
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.15)",
        }}>
          CATALOG_VERSION: 1.0 // ITEMS_DETECTED: {PRODUCTS.length} // STATUS: PENDING_UPLOAD
        </div>
      </div>

      <div className="carousel-mask">
        <div className="carousel-track">
          {ITEMS.map((item, i) => (
            <a
              key={i}
              href="https://wifistoreunit.myshopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="product-card"
            >
              {/* Image area */}
              <div className="product-img">
                <div className="product-no-img">
                  {/* No-signal icon */}
                  <svg className="product-no-img-icon" viewBox="0 0 64 64" fill="none">
                    <rect x="8" y="8" width="48" height="48" stroke="white" strokeWidth="2"/>
                    <line x1="8" y1="8" x2="56" y2="56" stroke="white" strokeWidth="2"/>
                    <line x1="56" y1="8" x2="8" y2="56" stroke="white" strokeWidth="2"/>
                  </svg>
                  <div className="product-no-img-id">{item.id}</div>
                </div>
              </div>

              {/* Info */}
              <div className="product-info">
                <div className="product-tag">{item.tag}</div>
                <div className="product-name">{item.name}</div>
                <div className="product-price">{item.price}</div>
                <div className="product-status">{item.status}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
