import { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaCode, FaGithub } from "react-icons/fa6";
import { IoIosCube } from "react-icons/io";
import { PiCircuitryFill } from "react-icons/pi";
import styled from "styled-components";
import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";

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

function ProjectCard({ project, onClick }) {
  const computedColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-primary")
    .trim();

  const { title, description, type, image_url } = project;
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
    <StyledProjectCard onClick={onClick}>
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
  );
}

export default ProjectCard;
