import React from "react";
import bmcQR from "../assets/bmc_qr.png"; // Správna cesta k QR kódu

function DownloadPage() {
  return (
    <div style={{ padding: "30px 20px", textAlign: "center", lineHeight: "1.8", fontSize: "18px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "28px" }}>Stiahnutie</h2>
      <p>
        Stiahnite si aplikáciu kliknutím na odkaz nižšie:
      </p>
      <a
        href="https://github.com/peterfromslovakia/vocabular-program/raw/refs/heads/main/Vocabular%20Setup%201.0.0.zip?download="
        download
        style={{
          textDecoration: "none",
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          display: "inline-block",
          marginTop: "20px",
          fontSize: "16px",
        }}
      >
        Stiahnuť aplikáciu
      </a>

      <div style={{ marginTop: "40px" }}>
        <h3 style={{ textAlign: "center", marginBottom: "20px", fontSize: "22px" }}>Podporte tento projekt</h3>
        <p>
          Ak sa vám tento projekt páči a chcete ho podporiť, môžete mi kúpiť kávu cez{" "}
          <a
            href="https://buymeacoffee.com/peter_obala"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007BFF", textDecoration: "underline" }}
          >
            Buy Me a Coffee
          </a>.
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <img
            src={bmcQR} // QR kód
            alt="QR kód na podporu"
            style={{
              width: "200px",
              height: "200px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
