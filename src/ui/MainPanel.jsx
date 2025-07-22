import { Outlet } from "react-router";
import { styled } from "styled-components";
import AppNav from "./AppNav";
import DarkModeToggle from "./DarkModeToggle";

const StyledMainPanel = styled.div`
    background-color: var(--color-bg-1);
    border-radius: 8px;
    margin: 0 5px;

    height: calc(100vh - 6rem);
`;

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const StyledNavContainer = styled.div`
    display: flex;
    background-color: var(--color-bg-0);    
`


function MainPanel() {
    return (
      <StyledMainPanel>
        <StyledHeader>
        <h1>Main Panel</h1>
        <StyledNavContainer>
        <AppNav/>
        <DarkModeToggle/>
        </StyledNavContainer>
        </StyledHeader>
        <Outlet />
      </StyledMainPanel>
    );
  }
  
  export default MainPanel;
  