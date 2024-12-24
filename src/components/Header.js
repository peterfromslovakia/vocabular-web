import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Header({ onLanguageChange }) {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1976d2",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} to="/" color="inherit">
            Domov
          </Button>
          <Button component={Link} to="/how-it-works" color="inherit">
            Ako to funguje
          </Button>
          <Button component={Link} to="/gallery" color="inherit">
            Galéria
          </Button>
          <Button component={Link} to="/download" color="inherit">
            Stiahnutie
          </Button>
          <Button component={Link} to="/about" color="inherit">
            O mne
          </Button>
        </Box>
        <Box sx={{ position: "absolute", right: "10px", display: "flex", gap: 1 }}>
          <img
            src="./assets/slovak.png"
            alt="Slovak"
            style={{
              cursor: "pointer",
              marginRight: "10px",
              width: "24px",
              height: "24px",
            }}
            onClick={() => onLanguageChange("sk")}
          />
          <img
            src="./assets/uk.png"
            alt="English"
            style={{ cursor: "pointer", width: "24px", height: "24px" }}
            onClick={() => onLanguageChange("en")}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
