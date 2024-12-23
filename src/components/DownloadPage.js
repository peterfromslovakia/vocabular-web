import React from "react";
import bmcQR from "../assets/bmc_qr.png"; // Správna cesta k QR kódu

function DownloadPage() {
  return (
    <div style={{ padding: "50px 20px", textAlign: "center" }}>
      <h2>Stiahnutie</h2>
      <p>
        Stiahnite si aplikáciu kliknutím na odkaz nižšie:
      </p>
      <a
        href="https://github.com/peterfromslovakia/vocabular/releases/download/v1.0.0/Vocabular.Setup.1.0.0.zip"
        download
        style={{
          textDecoration: "none",
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          display: "inline-block",
          marginTop: "20px",
        }}
      >
        Stiahnuť aplikáciu
      </a>

      <div style={{ marginTop: "40px" }}>
        <h3>Podporte tento projekt</h3>
        <p>
          Ak sa vám tento projekt páči a chcete ho podporiť, môžete mi kúpiť kávu cez{" "}
          <a
            href="https://buymeacoffee.com/peter_obala"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Me a Coffee
          </a>.
        </p>
        <img
          src={bmcQR} // QR kód
          alt="QR kód na podporu"
          style={{
            width: "200px",
            height: "200px",
            marginTop: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </div>
  );
}

export default DownloadPage;
