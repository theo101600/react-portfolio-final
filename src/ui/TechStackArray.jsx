import { techStackIcons } from "../constants/techStackIcons.jsx";

import styled from "styled-components";

const StyledTechStackArray = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-radius: 8px;
  margin-bottom: 1rem;
  margin-left: 2rem;
  background-color: var(--color-bg-1);
  padding: 0.5rem;
`;

const StyledIcon = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 0.5rem;

  svg {
    transition: transform 0.2s ease;
  }

  :hover {
    color: var(--color-primary);
  }

  &:hover::after {
    content: attr(data-label);
    position: absolute;
    bottom: -3.5rem;
    background-color: var(--color-primary);
    color: var(--color-text-0-a);
    font-size: 1.5rem;
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
    white-space: nowrap;
    opacity: 1;
    pointer-events: none;
    z-index: 10;
  }

  &::after {
    content: "";
    opacity: 0;
    transition: opacity 0.2s ease;
  }
`;

function TechStackArray({ tech_stack }) {
  return (
    <StyledTechStackArray>
      {tech_stack.map((tech, index) => (
        <StyledIcon data-label={tech} key={index}>
          {techStackIcons[tech]}
        </StyledIcon>
      ))}
    </StyledTechStackArray>
  );
}

export default TechStackArray;
