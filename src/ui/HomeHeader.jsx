import styled from "styled-components";
import HomeNav from "./HomeNav";
import { HiMiniCubeTransparent } from "react-icons/hi2";
import DarkModeToggle from "./DarkModeToggle";

const StyledHomeHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--color-bg-2);
  height: 80px;
  width: 100%;
  justify-content: space-around;
  z-index: 5;
`;

function HomeHeader() {
  return (
    <StyledHomeHeader>
      <HiMiniCubeTransparent size={50} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <HomeNav />
        <DarkModeToggle />
      </div>
    </StyledHomeHeader>
  );
}

export default HomeHeader;
