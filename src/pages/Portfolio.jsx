import styled from "styled-components";
import ProjectCard from "../ui/ProjectCard";
import MarkdownViewer from "../ui/MarkdownViewer";
import ProjectCardArray from "../ui/ProjectCardArray";

const StyledPortfolio = styled.div``;

function Portfolio() {
  return (
    <StyledPortfolio>
      <ProjectCardArray />
    </StyledPortfolio>
  );
}

export default Portfolio;
