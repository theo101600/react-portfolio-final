import { styled } from "styled-components";
import DarkModeToggle from "./DarkModeToggle";

const StyledSidePanel = styled.div`
    background-color: var(--color-bg-1);
    border-radius: 8px;
    margin: 0 5px;

    // display: flex;
    // flex-direction: column;
    height: calc(100vh - 6rem);
`

function SidePanel() {
    return (
      <StyledSidePanel>
        <h1>Side Panel</h1>
      </StyledSidePanel>
    );
  }
  
  export default SidePanel;
  