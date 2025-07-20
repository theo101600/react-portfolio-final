import styled from "styled-components";
import HomeHeader from "../ui/HomeHeader";
import Button from "../ui/Button";
import Squares from "../ui/Squares";
import { useDarkMode } from "../context/DarkModeContext";

const StyledHomepage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  h1 {
    font-family: "Ubuntu Mono", monospace;
    font-weight: 400;
    font-style: normal;
    font-size: 96px;
    line-height: 10rem;
    position: relative;
    z-index: 5;
    pointer-events: none;
  }
  h2 {
    font-family: "Ubuntu Mono", monospace;
    font-weight: 400;
    font-style: normal;
    font-size: 78px;
    line-height: 10rem;
    position: relative;
    z-index: 5;
    pointer-events: none;
  }
`;
const Img = styled.img`
  margin: 5rem;
  width: 600px;
  pointer-events: none;
  position: relative;
  z-index: 5;
`;

const StyledBackground = styled.div`
  /* background-color: red; */
  height: 100%;
  width: 100%;
  position: absolute;
`;

function Homepage() {
  const { isDarkMode } = useDarkMode();
  console.log(isDarkMode);
  return (
    <StyledHomepage>
      <HomeHeader />
      <StyledContainer>
        <StyledBackground>
          <Squares
            speed={0.4}
            squareSize={40}
            direction="down" // up, down, left, right, diagonal
            borderColor={!isDarkMode ? "#fffbf2" : "#000000"}
            hoverFillColor="#f07167"
          />
        </StyledBackground>
        <div>
          <h1>
            Hi, <br />
            I'm Theo
          </h1>
          <h2>React Developer</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "5rem",
            }}
          >
            <Button variation="primary" size="large">
              Contact
            </Button>
          </div>
        </div>
        <Img src="/profile-image.jpg"></Img>
      </StyledContainer>
    </StyledHomepage>
  );
}

export default Homepage;
