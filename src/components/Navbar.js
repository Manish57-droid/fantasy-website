// src/components/Navbar.js

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <Logo><StyledLink to="/Home">Manish Fantasy</StyledLink></Logo>
      <NavLinks>
        <StyledLink to="/about-us">About Us</StyledLink>
        <StyledLink to="/terms-and-conditions">Terms and Conditions</StyledLink>
        <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
        <StyledLink to="/game-addiction">Game Addiction</StyledLink>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
  color: white;
  padding: 10px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
