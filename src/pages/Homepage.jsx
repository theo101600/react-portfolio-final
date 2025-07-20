import styled from "styled-components";
import HomeHeader from "../ui/HomeHeader";

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
`;

function Homepage() {
  return (
    <StyledHomepage>
      <HomeHeader />
      <StyledContainer>
        <h1>
          Hi, <br />
          I'm Theo
        </h1>
      </StyledContainer>
    </StyledHomepage>
  );
}

export default Homepage;
