import { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaCode, FaGithub } from "react-icons/fa6";
import { IoIosCube } from "react-icons/io";
import { PiCircuitryFill } from "react-icons/pi";
import styled from "styled-components";
import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";
import Modal from "./Modal";
import MarkdownViewer from "./MarkdownViewer";
import TechStackArray from "./TechStackArray";
import { GoProjectSymlink } from "react-icons/go";

const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 320px;
  height: 290px;
  border-radius: 8px;

  h3 {
    text-transform: uppercase;
  }
  p {
    text-indent: 1rem;
    font-weight: 200;
    font-size: 1.3rem;
  }

  &:hover {
    background-color: var(--color-bg-0);
  }
`;

const StyledInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;
  svg {
    font-size: 35px;
    margin: 0.5rem;
  }
`;

const StyledImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 160px;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 300px;
    height: 160px;
    object-fit: cover;
    display: block;
  }
`;

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

function ProjectCard({ project }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const computedColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-primary")
    .trim();

  const {
    title,
    description,
    type,
    image_url,
    github_url,
    project_url,
    tech_stack,
    markdown,
  } = project;
  const [loading, setLoading] = useState(true);

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
      <StyledProjectCard
        onClick={() => {
          setIsOpenModal((show) => !show);
        }}
      >
        <StyledImageContainer>
          {loading && (
            <Bouncy
              className="loader"
              size="45"
              speed="1"
              color={computedColor}
            />
          )}

          <img
            src={image_url}
            alt={title}
            onLoad={() => setLoading(false)}
            style={{ display: loading ? "none" : "" }}
          />
        </StyledImageContainer>
        <StyledInfoContainer>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div>{icon}</div>
        </StyledInfoContainer>
      </StyledProjectCard>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <StyledModalHeader>
            {icon}
            <div>
              <h1>{title}</h1>
              <StyledLinksContainer>
                <a href={project_url}>
                  <GoProjectSymlink /> Project URL
                </a>
                <a href={github_url}>
                  <FaGithub />
                  Github URL
                </a>
              </StyledLinksContainer>
              <TechStackArray tech_stack={tech_stack} />
            </div>
          </StyledModalHeader>
          <MarkdownViewer markdown={markdown} />
        </Modal>
      )}
    </>
  );
}

export default ProjectCard;
