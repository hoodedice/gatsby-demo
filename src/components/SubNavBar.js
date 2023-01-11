import React from "react";
import styled from "styled-components";
import Heading1 from "./base/Heading";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1565c0;
  height: 32px;
  padding: 0 16px;
`

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
`

const Link = styled.a`
  color: white;
`

function SubNavbar() {

  return (
    <Nav>
      <Actions>
        <Link>New Arrivals</Link>
        <Link>Men</Link>
        <Link>Women</Link>
        <Link>Children</Link>
        <Link>Clearance</Link>
      </Actions>
    </Nav>
  );
}

export default SubNavbar;
