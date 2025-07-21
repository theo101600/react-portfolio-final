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

  @media (max-width: 780px) {
    flex-direction: column;
  }

  h1 {
    font-family: "Ubuntu Mono", monospace;
    font-weight: 400;
    font-style: normal;
    font-size: 8.5rem;
    line-height: 10rem;
    position: relative;
    z-index: 5;
    pointer-events: none;

    @media (max-width: 1200px) {
      font-size: 7rem;
      line-height: 8rem;
    }

    @media (max-width: 950px) {
      font-size: 6rem;
      line-height: 7rem;
    }

    @media (max-width: 580px) {
      font-size: 5rem;
      line-height: 6rem;
    }
  }
  h2 {
    font-family: "Ubuntu Mono", monospace;
    font-weight: 400;
    font-style: normal;
    font-size: 6rem;
    line-height: 10rem;
    position: relative;
    z-index: 5;
    pointer-events: none;

    @media (max-width: 1200px) {
      font-size: 5rem;
      line-height: 8rem;
    }

    @media (max-width: 580px) {
      font-size: 4rem;
      line-height: 6rem;
    }
  }
`;
const Img = styled.img`
  margin: 5rem;
  width: 500px;
  pointer-events: none;
  position: relative;
  z-index: 5;

  @media (max-width: 1200px) {
    width: 400px;
  }

  @media (max-width: 950px) {
    width: 300px;
  }

  @media (max-width: 450px) {
    width: 250px;
  }
`;

const StyledBackground = styled.div`
  /* background-color: red; */
  height: 100%;
  width: 100%;
  position: absolute;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  @media (max-width: 1200px) {
    margin-top: 3rem;
  }
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
          <StyledButtonContainer>
            <Button variation="primary" size="large">
              Contact
            </Button>
          </StyledButtonContainer>
        </div>
        <Img src="/profile-image.jpg"></Img>
      </StyledContainer>
    </StyledHomepage>
  );
}

export default Homepage;
