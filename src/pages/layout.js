import React from "react";
import { Container, Navbar, SubNavbar } from "../components";

function Layout({ children }) {

  return (
    <Container>
      <Navbar/>
      <SubNavbar/>
      {children}
    </Container>
  );
}

export default Layout;
