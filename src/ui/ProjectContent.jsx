import { AiFillQuestionCircle } from "react-icons/ai";
import { FaCode, FaGithub } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { IoIosCube } from "react-icons/io";
import { PiCircuitryFill } from "react-icons/pi";
import styled from "styled-components";
import TechStackArray from "./TechStackArray";
import MarkdownViewer from "./MarkdownViewer";

const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-bg-2);
  border-radius: 8px;

  h1 {
    padding-left: 2rem;
    font-size: 4rem;
    font-weight: 100;
    text-transform: uppercase;
  }

  svg {
    font-size: 80px;
  }
`;

const StyledLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding-left: 2rem;

  a {
    display: flex;
    align-items: center;
    background-color: var(--color-bg-1);
    border-radius: 8px;
    padding: 0 1rem;
    margin: 1rem 0;
    svg {
      margin: 0.5rem 0.5rem;
      font-size: 2rem;
    }
    &:hover {
      background-color: var(--color-primary);
    }
  }
`;

function ProjectContent({ project }) {
  const { title, type, github_url, project_url, tech_stack, markdown } =
    project;

  let icon;
  switch (type) {
    case "web-app":
      icon = <FaCode />;
      break;
    case "electronics":
      icon = <PiCircuitryFill />;
      break;
    case "3d":
      icon = <IoIosCube />;
      break;
    default:
      icon = <AiFillQuestionCircle />;
  }

  return (
    <>
      <StyledModalHeader>
        {icon}
        <div>
          <h1>{title}</h1>
          <StyledLinksContainer>
            {project_url && (
              <a href={project_url}>
                <GoProjectSymlink /> Project URL
              </a>
            )}
            {github_url && (
              <a href={github_url}>
                <FaGithub />
                Github URL
              </a>
            )}
          </StyledLinksContainer>
          <TechStackArray tech_stack={tech_stack} />
        </div>
      </StyledModalHeader>
      <MarkdownViewer markdown={markdown} />
    </>
  );
}

export default ProjectContent;
