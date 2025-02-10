import React from "react";
import { FaYoutube, FaTiktok, FaEnvelope } from "react-icons/fa";

function AboutPage() {
  return (
    <div style={{ padding: "30px 20px", textAlign: "center", fontSize: "18px" }}>
      <h2 style={{ marginBottom: "20px", fontSize: "28px" }}>O mne</h2>
      <p>Som s výpočtovou technikou prepojený viac ako 20 rokov.</p>
      <p>
        Skontrolujte si gramatiku pomocou mojej ďalšej aplikácie:{" "}
        <a
          href="https://peterfromslovakia.github.io/Anglicka-Gramatika-web/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007BFF", textDecoration: "underline" }}
        >
          Anglická Gramatika
        </a>.
      </p>
      
      <div style={{ marginTop: "40px", fontSize: "20px" }}>
        <h3>Kontaktujte ma:</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
          <a
            href="https://www.youtube.com/@peter_obala"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FF0000", fontSize: "30px" }}
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.tiktok.com/@peter_obala?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000000", fontSize: "30px" }}
          >
            <FaTiktok />
          </a>
          <a
            href="mailto:peter.obala@gmail.com"
            style={{ color: "#007BFF", fontSize: "30px" }}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
