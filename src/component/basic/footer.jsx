import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1c1b1bba", color: "#fff", p: { xs: 2, sm: 4 } }}>
      {/* Container for Footer Sections */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 4 }}>
        
        {/* About Us Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: "2rem" }}>
            About Us
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1.5rem" }}>
          Our mission is to support sustainable agriculture practices through innovative solutions.
          </Typography>
        </Box>

        {/* Quick Links Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link to="/" style={{ marginBottom: "0.5rem", textDecoration: "none", color: "#ffffff" }}>
              Home
            </Link>
            <Link to="/services" style={{ marginBottom: "0.5rem", textDecoration: "none", color: "#ffffff" }}>
              Services
            </Link>
            <Link to="/about" style={{ marginBottom: "0.5rem", textDecoration: "none", color: "#ffffff" }}>
              About Us
            </Link>
            <Link to="/contactus" style={{ marginBottom: "0.5rem", textDecoration: "none", color: "#ffffff" }}>
              Contact Us
            </Link>
          </Box>
        </Box>

        {/* Follow Us Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: "2rem" }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <IconButton href="https://www.instagram.com/_.white_bee_/" sx={{ color: "#fff" }}>
              <Instagram sx={{fontSize: 30}}/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/daksh-chaudhari-699a8b259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" sx={{ color: "#fff" }}>
              <LinkedIn sx={{fontSize: 30}}/>
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom Section */}
      <Box sx={{ mt: 4, textAlign: "center", borderTop: "1px solid #555", pt: 2 }}>
        <Typography variant="body2" sx={{fontSize:"1.5rem"}}>
          &copy; {new Date().getFullYear()} White Bee.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
