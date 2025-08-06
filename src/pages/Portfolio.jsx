import styled from "styled-components";
import ProjectCardArray from "../ui/ProjectCardArray";
import Filter from "../ui/Filter";

const StyledPortfolio = styled.div`
  height: calc(100vh - 170px);
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 1rem;

  @media (max-width: 550px) {
    height: calc(100vh - 100px);
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-text-a-1);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;

function Portfolio() {
  return (
    <StyledPortfolio>
      <Filter
        filterField={"type"}
        options={[
          { value: "all", label: "All" },
          { value: "web-app", label: "Web Apps" },
          { value: "3d", label: "3D" },
          { value: "electronics", label: "Electronics" },
        ]}
      />
      <ProjectCardArray />
    </StyledPortfolio>
  );
}

export default Portfolio;
