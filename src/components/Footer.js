import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: "center",
        padding: "10px",
        backgroundColor: "#1976d2",
        color: "white",
        boxShadow: "0px -4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <Typography variant="body2">
        © 2024 Peter Obala. Všetky práva vyhradené.
      </Typography>
    </Box>
  );
}

export default Footer;
