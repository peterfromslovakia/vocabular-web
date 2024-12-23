import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import HowItWorksPage from "./components/HowItWorksPage";
import GalleryPage from "./components/GalleryPage";
import DownloadPage from "./components/DownloadPage";
import AboutPage from "./components/AboutPage";
import { Box } from "@mui/material";

function App() {
  const [language, setLanguage] = useState("sk");

  return (
    <Box>
      {/* Horná lišta */}
      <header
        style={{
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px",
              padding: "5px 10px",
              transition: "all 0.3s ease",
            }}
          >
            Domov
          </Link>
          <Link
            to="/how-it-works"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px",
              padding: "5px 10px",
              transition: "all 0.3s ease",
            }}
          >
            Ako to funguje
          </Link>
          <Link
            to="/gallery"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px",
              padding: "5px 10px",
              transition: "all 0.3s ease",
            }}
          >
            Galéria
          </Link>
          <Link
            to="/download"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px",
              padding: "5px 10px",
              transition: "all 0.3s ease",
            }}
          >
            Stiahnutie
          </Link>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "18px",
              padding: "5px 10px",
              transition: "all 0.3s ease",
            }}
          >
            O mne
          </Link>
        </nav>
      </header>

      {/* Routenovanie */}
      <Routes>
        <Route
          path="/"
          element={
            <Box>
              <HomePage language={language} />
              {/* Texty pod hlavnou stránkou */}
              <div
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                <p>
                  Cieľom programu je testovať Vás iba zo slovíčok, ktoré sú v databáze. Tento prístup je ideálny pre začínajúcich žiakov, ktorí si potrebujú precvičovať aktuálne vyučované slovíčka.
                </p>
                <p>
                  Pri testovaní vždy píšete len anglické slovíčko ako odpoveď na preklad slovenského slovíčka.
                </p>
                <p>
                  Systém Vám zobrazí slovenské slovíčko a Vašou úlohou bude ho preložiť do angličtiny.
                </p>
              </div>
            </Box>
          }
        />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* Päta */}
      <footer
        style={{
          padding: "10px",
          backgroundColor: "#1976d2",
          color: "white",
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          width: "100%",
          boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        © 2024 Peter Obala. Všetky práva vyhradené.
      </footer>
    </Box>
  );
}

export default App;
