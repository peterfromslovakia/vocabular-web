import React from "react";
import { FaYoutube, FaTiktok, FaEnvelope } from "react-icons/fa";

function AboutPage() {
  return (
    <div style={{ padding: "30px 20px", textAlign: "center", lineHeight: "1.8", fontSize: "18px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "28px" }}>O mne</h2>
      <p>
        <strong>Volám sa Peter Obala</strong>, pochádzam zo Slovenska, konkrétne z mesta Bratislava, a narodil som sa v roku
        1976. Viac ako 22 rokov som pôsobil ako IT špecialista v jednej spoločnosti, kde som získal bohaté skúsenosti v oblasti
        správy IT systémov, monitorovania a automatizácie. Počas svojej kariéry som aktívne pracoval s rôznymi modernými
        technológiami, ako sú <strong>Zabbix</strong> na monitorovanie IT infraštruktúry, <strong>Pi-hole</strong> na správu DNS
        serverov, či <strong>ELK stack (Elasticsearch, Logstash, Kibana)</strong> na analýzu a vizualizáciu logov.
      </p>
      <p>
        Tieto technológie som nielen implementoval, ale aj optimalizoval podľa potrieb firmy, čím som zabezpečil stabilný chod IT
        systémov a efektívne riešenie problémov. Pri mojej práci som sa vždy zameriaval na spoľahlivosť, výkon a jednoduchosť
        používania, čo sú hodnoty, ktoré prenášam aj do svojich vlastných projektov.
      </p>
      <p>
        Mojou vášňou je programovanie, ktorému som sa začal venovať v rámci svojich záujmov. Medzi moje najnovšie projekty patrí{" "}
        <strong>Vocabular</strong>, desktopová aplikácia pre precvičovanie anglicko-slovenských slovíčok. Táto aplikácia je
        výsledkom mojej túžby spojiť technológiu s praktickým nástrojom na učenie. Program som vytvoril nielen pre seba, ale aj
        pre všetkých, ktorí chcú zlepšiť svoje jazykové znalosti. Pri tvorbe programu a webstránky mi výrazne pomohla umelá
        inteligencia, ktorá mi poskytla inšpiráciu a efektívne riešenia.
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
