import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.svg';

export const Container = styled.div`
  height: 6rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  position: fixed;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  }
  @media ${props => props.theme.mediaQueries.medium} {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  max-width: 200rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 19rem;

  img {
    width: 2rem;
  }

  @media ${props => props.theme.mediaQueries.larger} {
    padding: 0 5rem;
  }
`;

export const StyledLink = styled(Link)`
  outline: 0;
  font-size: 1.4rem;
  font-family: 'Lexend Deca', sans-serif;
  transition: all 0.2s;
  cursor: pointer;

  color: ${props => props.theme.colors.mainDark};
  &:hover {
    color: ${props => props.theme.colors.main};
  }
`;
export const Navbar = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-around;

  cursor: pointer;
  @media ${props => props.theme.mediaQueries.small} {
    display: none;
  }
`;

export default function Nav() {
  return (
    <Container>
      <Wrapper>
        <StyledLink
          activeClass="active"
          to="home"
          smooth
          spy
          offset={-70}
          duration={700}
        >
          <img src={Logo} alt="logo" />
        </StyledLink>

        <Navbar>
          <StyledLink
            activeClass="active"
            to="about"
            smooth
            spy
            offset={-70}
            duration={700}
          >
            About
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="portfolio"
            smooth
            spy
            offset={-70}
            duration={700}
          >
            Portfolio
          </StyledLink>
          <StyledLink
            activeClass="active"
            to="contact"
            smooth
            spy
            offset={-70}
            duration={700}
          >
            Contact
          </StyledLink>
        </Navbar>
      </Wrapper>
    </Container>
  );
}
