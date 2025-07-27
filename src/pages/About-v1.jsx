import styled from "styled-components";
import SkillCard from "../ui/SkillCard";
import { FaCode } from "react-icons/fa6";
import { PiCircuitryFill } from "react-icons/pi";
import { IoIosCube } from "react-icons/io";

const skills = [
  {
    skillName: "Web Development",
    description: "HTML, CSS and Javascript. Fullstack development",
    icon: <FaCode />,
  },
  {
    skillName: "3D Modeling",
    description: "Using SOLIDWORKS to model and render parts and assemblies",
    icon: <IoIosCube />,
  },
  {
    skillName: "Circuit Design",
    description: "Using KiCad for designing and generating gerber files",
    icon: <PiCircuitryFill />,
  },
];

const StyledAbout = styled.div`
  h1 {
    margin: 2rem 0;
  }
`;

const StyledIntro = styled.div`
  p {
    text-indent: 2rem;
  }
`;

const StyledSkillContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

function About() {
  return (
    <StyledAbout>
      <StyledIntro>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim
          necessitatibus laborum repellendus aliquam aut, asperiores vel vitae
          dolore eos ratione, debitis ut incidunt dolorum accusantium. Ipsum
          quam sapiente facere?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          animi officiis perferendis soluta voluptas quae, voluptatum iste
          dolorum ut architecto sit dicta nostrum inventore enim corrupti
          tempore. Possimus, vel sit.
        </p>
      </StyledIntro>
      <h1>What I'm doing</h1>
      <StyledSkillContainer>
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </StyledSkillContainer>
      <h1>Certificates</h1>
    </StyledAbout>
  );
}

export default About;
