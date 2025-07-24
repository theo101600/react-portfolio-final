import { NavLink } from "react-router";
import { IoMdInformationCircle } from "react-icons/io";
import { IoNewspaperSharp } from "react-icons/io5";
import { ImBriefcase } from "react-icons/im";
import { RiContactsBook3Fill } from "react-icons/ri";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: 2.5rem;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 1.2rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  display: block;
  // text-transform: uppercase;
  margin: 20px 0;
  padding: 10px 20px;
  text-decoration: none;
  color: var(--color-text-a-0);
  font-size: 18px;
  font-weight: 600;
  transition: 0.5s;
  z-index: 1;

  @media (max-width: 550px) {
    padding: 0 10px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 0 5px;
    font-size: 14px;
  }

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

function AppNav() {
  return (
    <nav>
      <NavList>
        <StyledNavLink to="/about">
          <StyledContainer>
            <IoMdInformationCircle />
            About
          </StyledContainer>
        </StyledNavLink>

        <StyledNavLink to="/resume">
          <StyledContainer>
            <IoNewspaperSharp />
            Resume
          </StyledContainer>
        </StyledNavLink>

        <StyledNavLink to="/portfolio">
          <StyledContainer>
            <ImBriefcase />
            Portfolio
          </StyledContainer>
        </StyledNavLink>

        <StyledNavLink to="/contact">
          <StyledContainer>
            <RiContactsBook3Fill />
            Contact
          </StyledContainer>
        </StyledNavLink>
      </NavList>
    </nav>
  );
}

export default AppNav;
