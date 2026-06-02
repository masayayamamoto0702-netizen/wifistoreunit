"use client";

import Image from "next/image";

// SUBSYS_02 — PRODUCT CATALOG TRANSMISSION

const PRODUCTS = [
  {
    id:    "WSU-001",
    name:  "PILLS TEE",
    price: "¥6,600",
    tag:   "TEE",
    img:   "/pills-tee.jpg",
    href:  "https://wifistoreunit.myshopify.com",
  },
  {
    id:    "WSU-002",
    name:  "WIFI RADIO UNIT TEE",
    price: "¥6,600",
    tag:   "TEE",
    img:   "/wifi-radio-tee.jpg",
    href:  "https://wifistoreunit.myshopify.com",
  },
  {
    id:    "WSU-003",
    name:  "START TEE",
    price: "¥6,600",
    tag:   "TEE",
    img:   "/start-tee.jpg",
    href:  "https://wifistoreunit.myshopify.com",
  },
  {
    id:    "WSU-004",
    name:  "GRID TEE",
    price: "¥6,600",
    tag:   "TEE",
    img:   "/grid-tee.jpg",
    href:  "https://wifistoreunit.myshopify.com",
  },
  {
    id:    "WSU-005",
    name:  "TECK TEE",
    price: "¥6,600",
    tag:   "TEE",
    img:   "/teck-tee.jpg",
    href:  "https://wifistoreunit.myshopify.com",
  },
  {
    id:      "WSU-006",
    name:    "BRAIN TEE",
    price:   "¥6,600",
    tag:     "TEE",
    img:     "/brain-tee-front.jpg",
    imgBack: "/brain-tee-back.jpg",
    href:    "https://wifistoreunit.myshopify.com",
  },
  // 商品を追加する場合はここに追記
];

// 枚数が少ない場合はループのために複製
const ITEMS = PRODUCTS.length < 4
  ? [...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS]
  : [...PRODUCTS, ...PRODUCTS];

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
          <span style={{ color: "var(--green)" }}>● ONLINE</span>
        </div>

        <div style={{
          fontFamily: "var(--mono)",
          fontSize: 9,
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.15)",
        }}>
          CATALOG_VERSION: 1.0 {"//"} ITEMS_DETECTED: {PRODUCTS.length} {"//"} STATUS: ACTIVE
        </div>
      </div>

      <div className="carousel-mask">
        <div className="carousel-track">
          {ITEMS.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card"
            >
              {/* Image area */}
              <div className="product-img">
                {/* Front image */}
                <Image
                  src={item.img}
                  alt={item.name}
                  width={260}
                  height={347}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    position: "absolute",
                    inset: 0,
                    transition: "opacity 0.45s ease",
                  }}
                />
                {/* Back image (hover reveal) */}
                {item.imgBack && (
                  <Image
                    src={item.imgBack}
                    alt={`${item.name} back`}
                    width={260}
                    height={347}
                    className="product-img-back"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      position: "absolute",
                      inset: 0,
                    }}
                  />
                )}
              </div>

              {/* Info */}
              <div className="product-info">
                <div className="product-tag">{item.tag}</div>
                <div className="product-name">{item.name}</div>
                <div className="product-price">{item.price}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
