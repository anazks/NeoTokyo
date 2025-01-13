import React from 'react'
import './inside.css'
function Inside() {
    const specs = [
        { label: "PROCESSOR", value: "INTEL", subValue: "Core - i7 14700K 4.3GHz Unlocked" },
        { label: "GRAPHICS", value: "NVIDIA", subValue: "RTX 4070 Ti Super 16GB" },
        { label: "MOTHERBOARD", value: "ASUS", subValue: "ProArt Z790 Creator WiFi 6E" },
        { label: "RAM", value: "GSKILL Dual Channel Memory" },
        { label: "STORAGE", value: "SAMSUNG 980 Pro" },
        { label: "COOLING", value: "AIR COOLED", subValue: "NOCTUA 12MM" },
        { label: "CASE", value: "COCO ESPORTS", subValue: "ZR1829" },
        { label: "PSU", value: "CORSAIR", subValue: "RM 1000e - 80+ GOLD" },
        { label: "OS", value: "MICROSOFT", subValue: "Windows 11 Home" }
      ];
  return (
    <div className="pc-specs-container">
    <div className="pc-specs-header">
      <h1>WHAT'S INSIDE</h1>
      <p className="package-content">1x PC, USER MANUAL, 1x NEO TOKYO PRIORITY ONE SUBSCRIPTION (1 YEAR)</p>
    </div>

    <div className="warranty-section">
      <h2>WARRANTY INFO</h2>
      <p>1 Year Onsite Warranty</p>
      <div className="warranty-bundles">
        <p>AMC Bundles Available at Checkout (Years)</p>
        <div className="warranty-buttons">
          <button>+1</button>
          <button>+2</button>
          <button>+3</button>
        </div>
      </div>
    </div>

    <div className="specs-section">
      <h2>SPECIFICATIONS</h2>
      <div className="specs-grid">
        {specs.map((spec, index) => (
          <div key={index} className="spec-item">
            <div className="spec-label">{spec.label}</div>
            <div className="spec-value">
              {spec.value}
              {spec.subValue && <div className="spec-subvalue">{spec.subValue}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
    <h2>CONNECTIVITY / PORTS</h2>
    <div className="specs-section">
      <h2>SPECIFICATIONS</h2>
      <div className="specs-grid">
        {specs.map((spec, index) => (
          <div key={index} className="spec-item">
            <div className="spec-label">{spec.label}</div>
            <div className="spec-value">
              {spec.value}
              {spec.subValue && <div className="spec-subvalue">{spec.subValue}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
    <h2>DIAMENSIONS</h2>
    <div className="specs-grid">
        {specs.map((spec, index) => (
          <div key={index} className="spec-item">
            <div className="spec-label">{spec.label}</div>
            <div className="spec-value">
              {spec.value}
              {spec.subValue && <div className="spec-subvalue">{spec.subValue}</div>}
            </div>
          </div>
        ))}
      </div>
    <h2>WEIGHT</h2>
    <div className="specs-grid">
        {specs.map((spec, index) => (
          <div key={index} className="spec-item">
            <div className="spec-label">{spec.label}</div>
            <div className="spec-value">
              {spec.value}
              {spec.subValue && <div className="spec-subvalue">{spec.subValue}</div>}
            </div>
          </div>
        ))}
      </div>
    <h2>POWER CONSUMPTION</h2>
    <div className="specs-grid">
        {specs.map((spec, index) => (
          <div key={index} className="spec-item">
            <div className="spec-label">{spec.label}</div>
            <div className="spec-value">
              {spec.value}
              {spec.subValue && <div className="spec-subvalue">{spec.subValue}</div>}
            </div>
          </div>
        ))}
      </div>
    <h2>AUDIO</h2>
    <div className="specs-grid">
        {specs.map((spec, index) => (
          <div key={index} className="spec-item">
            <div className="spec-label">{spec.label}</div>
            <div className="spec-value">
              {spec.value}
              {spec.subValue && <div className="spec-subvalue">{spec.subValue}</div>}
            </div>
          </div>
        ))}
      </div>

  </div>
  )
}

export default Inside
