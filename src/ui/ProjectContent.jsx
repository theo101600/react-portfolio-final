import { AiFillQuestionCircle } from "react-icons/ai";
import { FaCode, FaGithub } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { IoIosCube } from "react-icons/io";
import { PiCircuitryFill } from "react-icons/pi";
import styled from "styled-components";
import TechStackArray from "./TechStackArray";
import MarkdownViewer from "./MarkdownViewer";
import ModelViewer from "./ModelViewer";

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
    flex-wrap: wrap;
  }

  svg {
    font-size: 80px;
  }

  @media (max-width: 800px) {
    .type-icon {
      display: none;
    }
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

const StyledModelViewerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProjectContent({ project }) {
  const { title, type, github_url, project_url, tech_stack, markdown } =
    project;

  let icon;
  switch (type) {
    case "web-app":
      icon = <FaCode className="type-icon" />;
      break;
    case "electronics":
      icon = <PiCircuitryFill className="type-icon" />;
      break;
    case "3d":
      icon = <IoIosCube className="type-icon" />;
      break;
    default:
      icon = <AiFillQuestionCircle className="type-icon" />;
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
                <GoProjectSymlink /> Project
              </a>
            )}
            {github_url && (
              <a href={github_url}>
                <FaGithub />
                Github
              </a>
            )}
          </StyledLinksContainer>
          <TechStackArray tech_stack={tech_stack} />
        </div>
      </StyledModalHeader>

      {/* <StyledModelViewerContainer>
        <ModelViewer
          url="https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/3d-models//TrophyPCB.glb"
          width="60%"
          height={400}
          defaultRotationX={0}
          defaultRotationY={90}
          // defaultZoom={1}
          minZoomDistance={0.5}
          maxZoomDistance={5}
          enableMouseParallax={false}
          enableHoverRotation={false}
          ambientIntensity={0}
          keyLightIntensity={0}
          fillLightIntensity={0}
          rimLightIntensity={0}
          environmentPreset="park"
          autoFrame={true}
          showScreenshotButton={false}
        />
      </StyledModelViewerContainer> */}

      <MarkdownViewer markdown={markdown} />
    </>
  );
}

export default ProjectContent;
