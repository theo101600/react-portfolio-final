import { FaCode } from "react-icons/fa6";
import styled from "styled-components";

const StyledSkillCard = styled.div`
  background-color: var(--color-bg-0);
  border-radius: 8px;
  height: 140px;
  width: 350px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  svg {
    font-size: 8rem;
    margin: 1.2rem;
  }

  @media (max-width: 395px) {
    width: 310px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function SkillCard({ skill }) {
  const { skillName, description, icon } = skill;
  return (
    <StyledSkillCard>
      {icon}
      <StyledContainer>
        <h2>{skillName}</h2>
        <p>{description}</p>
      </StyledContainer>
    </StyledSkillCard>
  );
}

export default SkillCard;
