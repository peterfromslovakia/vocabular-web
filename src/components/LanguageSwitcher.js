import React from "react";
import { Box } from "@mui/material";

function LanguageSwitcher({ currentLanguage, onLanguageChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <img
        src={require("../assets/slovak.png")}
        alt="Slovak"
        style={{ width: "30px", height: "20px", cursor: "pointer" }}
        onClick={() => onLanguageChange("sk")}
      />
      <img
        src={require("../assets/uk.png")}
        alt="English"
        style={{ width: "30px", height: "20px", cursor: "pointer" }}
        onClick={() => onLanguageChange("en")}
      />
    </Box>
  );
}

export default LanguageSwitcher;
