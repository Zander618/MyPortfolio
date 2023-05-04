import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "grey" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mx: "auto",
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            component="a"
            href="/projects"
            sx={{
              mx: "auto",
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="h6"
            component="a"
            href="/contact"
            sx={{
              mx: "auto",
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
