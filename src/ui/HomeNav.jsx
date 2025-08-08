import { NavLink } from "react-router";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: 2.5rem;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  display: block;
  text-transform: uppercase;
  margin: 20px 0;
  padding: 10px 20px;
  text-decoration: none;
  color: var(--color-text-a-0);
  font-size: 18px;
  font-weight: 600;
  transition: 0.5s;
  z-index: 1;

  @media (max-width: 500px) {
    padding: 0 10px;
  }

  /* @media (max-width: 450px) {
    padding: 0 3px;
    font-size: 5px;
  }
  @media (max-width: 400px) {
    padding: 0 1px;
    font-size: 1px;
  } */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 2px solid var(--color-primary);
    border-bottom: 2px solid var(--color-primary);
    transform: scaleY(2);
    opacity: 0;
    transition: 0.3s;
  }

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-primary);
    transform: scale(0);
    opacity: 0;
    transition: 0.3s;
    z-index: -1;
  }

  &:hover {
    color: var(--color-text-b-0);
    &::before,
    &::after {
      transform: scaleY(1);
      opacity: 1;
    }
  }
`;

function HomeNav() {
  return (
    <nav>
      <NavList>
        <StyledNavLink to="/about">About</StyledNavLink>
        {/* <StyledNavLink to="/resume">Resume</StyledNavLink> */}
        <StyledNavLink to="/portfolio">Portfolio</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </NavList>
    </nav>
  );
}

export default HomeNav;
