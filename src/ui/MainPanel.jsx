import { Outlet, useLocation } from "react-router";
import { styled } from "styled-components";
import AppNav from "./AppNav";
import DarkModeToggle from "./DarkModeToggle";
import { useEffect, useState } from "react";

const StyledMainPanel = styled.div`
  background-color: var(--color-bg-1);
  border-radius: 8px;

  height: calc(100vh - 6rem);
  @media (max-width: 550px) {
    height: 100%;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    padding-left: 3rem;
  }

  @media (max-width: 1400px) {
    h1 {
      display: none;
    }
    justify-content: center;
  }
`;

const StyledNavContainer = styled.div`
  display: flex;
  background-color: var(--color-bg-0);
  border-radius: 0 8px 0 8px;
  padding: 0 5rem;

  @media (max-width: 1400px) {
    padding: 0 0;
    width: 100%;
    justify-content: center;
    border-radius: 8px 8px 0 0;
  }

  @media (max-width: 550px) {
    padding: 0 10px;
  }

  @media (max-width: 450px) {
    padding: 0 3px;
    font-size: 5px;
  }

  @media (max-width: 400px) {
    padding: 0 1px;
    font-size: 1px;
  }
`;

const StyledOutlet = styled.div`
  padding: 0.5rem 2rem;
`;

function MainPanel() {
  const location = useLocation();
  const [currentURL, setCurrentURL] = useState(
    location.pathname.split("/").pop()
  );

  useEffect(() => {
    setCurrentURL(location.pathname.split("/").pop());
  }, [location, setCurrentURL]);

  return (
    <StyledMainPanel>
      <StyledHeader>
        <div>
          <h1>{currentURL.charAt(0).toUpperCase() + currentURL.slice(1)}</h1>
        </div>
        <StyledNavContainer>
          <AppNav />
          <DarkModeToggle />
        </StyledNavContainer>
      </StyledHeader>
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </StyledMainPanel>
  );
}

export default MainPanel;
