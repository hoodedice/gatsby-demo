import React from "react";
import styled from "styled-components";
import Heading1 from "./base/Heading";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #003c8f;
  height: 64px;
  padding: 0 16px;
`

const SearchInput = styled.input`
  padding: 12px;
  width: 50%;
  height: 40px;
  border: 1px solid #e3e3e3;
  box-shadow: 0 2px 20px rgb(0 0 0 / 4%);
  border-radius: 8px;
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

function Navbar() {

  return (
    <Nav>
      <Heading1 inputColor="white">Shoes Inc.</Heading1>
      <SearchInput type="text" placeholder="Search" />
      <Actions>
        <Link>Sign In</Link>
        <Link>Register</Link>
      </Actions>
    </Nav>
  );
}

export default Navbar;
