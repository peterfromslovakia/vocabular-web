import React from "react";
import { Container, Box, Typography } from "@mui/material";

function HomePage() {
  const features = [
    { title: "Zobrazenie slovíčok", description: "Používateľ si môže pozrieť kompletný zoznam slovíčok, ktoré sú aktuálne uložené v databáze." },
    { title: "Pridávanie slovíčok", description: "Používateľ môže pridať nové slovíčka do databázy pomocou textových polí na zadanie Anglického a Slovenského prekladu." },
    { title: "Mazanie slovíčok", description: "Každé slovíčko v zozname je možné vymazať pomocou dedikovaného tlačidla." },
    { title: "Vyhľadávanie slovíčok", description: "Používateľ môže filtrovať zoznam slovíčok podľa zadaného textu (Anglického alebo Slovenského)." },
    { title: "Testovanie slovíčok", description: "Aplikácia umožňuje spustenie testu, kde používateľ prekladá náhodne vybrané slovíčka. Po ukončení testu sa zobrazí štatistika." },
    { title: "Prehrávanie výslovnosti", description: "Pri každom slovíčku je k dispozícii tlačidlo na prehratie výslovnosti Anglického slovíčka." },
  ];

  return (
    <Container sx={{ textAlign: "center", my: 5 }}>
      <Typography variant="h3" gutterBottom>
        Vitajte na stránke Vocabular!
      </Typography>
      <Typography variant="h5" gutterBottom>
        Objavte všetky možnosti aplikácie na učenie Anglicko-Slovenských slovíčok.
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 3,
          my: 5,
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: 2,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
              },
            }}
          >
            <Typography variant="h6" gutterBottom>
              {feature.title}
            </Typography>
            <Typography variant="body1">{feature.description}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default HomePage;
