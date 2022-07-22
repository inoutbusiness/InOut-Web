import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white" }}>
        &copy; {new Date().getFullYear()} - InOut
      </h1>
    </Box>
  );
};
export default Footer;