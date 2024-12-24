import React from "react";
import { Container, Typography, Box } from "@mui/material";

function Main() {
  return (
    <Container>
      <Box sx={{ textAlign: "center", my: 5 }}>
        <Typography variant="h3" gutterBottom>
          Vitajte vo Vocabular!
        </Typography>
        <Typography variant="h5">
          Objavte interaktívne funkcie na učenie anglicko-slovenských slovíčok.
        </Typography>
      </Box>
      <Box id="features" sx={{ my: 5 }}>
        <Typography variant="h4" gutterBottom>
          Funkcie aplikácie
        </Typography>
        <Typography>- Zobrazenie slovíčok</Typography>
        <Typography>- Pridávanie nových slovíčok</Typography>
        <Typography>- Testovací režim</Typography>
      </Box>
    </Container>
  );
}

export default Main;
