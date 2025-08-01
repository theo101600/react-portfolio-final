import { FaGithub, FaLinkedin } from "react-icons/fa6";
import styled from "styled-components";

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL;

const StyledSocialsContainer = styled.div`
  display: flex;
  gap: 1rem;
  a {
    z-index: 5;
  }
  svg:hover {
    color: var(--color-primary);
  }
`;

function Socials() {
  return (
    <StyledSocialsContainer>
      <a
        href={GITHUB_URL || "https://github.com"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={30} />
      </a>
      <a
        href={LINKEDIN_URL || "https://linkedin.com"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={30} />
      </a>
    </StyledSocialsContainer>
  );
}

export default Socials;
