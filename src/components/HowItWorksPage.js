import React from "react";

function HowItWorksPage() {
  return (
    <div style={{ padding: "30px 20px", textAlign: "left", lineHeight: "1.8", fontSize: "18px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "28px" }}>Ako to funguje</h2>
      <p>
        <strong>Popis aplikácie Vocabular</strong><br />
        Vocabular je desktopová aplikácia vyvinutá pomocou frameworku Electron. Aplikácia slúži na precvičovanie slovíčok v angličtine a slovenčine. Používateľ si môže pridávať vlastné slovíčka, testovať sa z existujúcej databázy a spravovať zoznam slovíčok. Aplikácia je navrhnutá tak, aby bola jednoducho použiteľná a prispôsobená potrebám používateľa.
      </p>
      <p>
        <strong>Funkcionality programu</strong>
      </p>
      <ul style={{ paddingLeft: "20px" }}>
        <li><strong>Zobrazenie slovíčok:</strong> Používateľ si môže pozrieť kompletný zoznam slovíčok, ktoré sú aktuálne uložené v databáze (<code>words.json</code>).</li>
        <li><strong>Pridávanie slovíčok:</strong> Používateľ môže pridať nové slovíčka do databázy pomocou textových polí na zadanie anglického a slovenského prekladu.</li>
        <li><strong>Mazanie slovíčok:</strong> Každé slovíčko v zozname je možné vymazať pomocou dedikovaného tlačidla.</li>
        <li><strong>Vyhľadávanie slovíčok:</strong> Používateľ môže filtrovať zoznam slovíčok podľa zadaného textu (anglického alebo slovenského).</li>
        <li><strong>Testovanie slovíčok:</strong> Aplikácia umožňuje spustenie testu, kde používateľ prekladá náhodne vybrané slovíčka. Po ukončení testu sa zobrazí štatistika.</li>
        <li><strong>Prehrávanie výslovnosti:</strong> Pri každom slovíčku je k dispozícii tlačidlo na prehratie výslovnosti anglického slovíčka.</li>
      </ul>
      <p>
        <strong>Podpora veľkého množstva slovíčok:</strong><br />
        Program Vocabular je navrhnutý tak, aby podporoval veľký počet slovíčok, a to bez výrazného obmedzenia. Ukladaním údajov do súboru <code>words.json</code> sa zabezpečuje, že môžete pridať stovky až tisíce slovíčok bez straty výkonu. Program zároveň obsahuje funkcie na rýchle vyhľadávanie, správu a precvičovanie slovíčok, čím je ideálny pre každého používateľa.
      </p>
    </div>
  );
}

export default HowItWorksPage;
