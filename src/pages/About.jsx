import styled from "styled-components";
import SkillCard from "../ui/SkillCard";
import { FaCode } from "react-icons/fa6";
import { PiCircuitryFill } from "react-icons/pi";
import { IoIosCube } from "react-icons/io";
import CertificateItem from "../ui/CertificateItem";
import TechStackArray from "../ui/TechStackArray";

const tech_stack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "NodeJs",
  "git",
  "github",
  "Python",
  "Supabase",
  "VisualStudioCode",
  "KiCad",
  "SolidWorks",
  "Photoshop",
  "Figma",
];

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

const certificates = [
  {
    name: "The Web Developer Bootcamp 2025",
    issuer: "Udemy",
    date: "February, 2025",
    pdfPath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/certificates/UC-62ddd181-9fde-4586-9e23-f057f27055b3.pdf",
    imagePath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images/certificate-images/UC-62ddd181-9fde-4586-9e23-f057f27055b3.jpg",
  },
  {
    name: "Learning the JavaScript Language",
    issuer: "LinkedIn Learning",
    date: "March, 2025",
    pdfPath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/certificates/CertificateOfCompletion_Learning%20the%20JavaScript%20Language.pdf",
    imagePath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images/certificate-images/CertificateOfCompletion_Learning%20the%20JavaScript%20Language.png",
  },
  {
    name: "CSS Essential Training",
    issuer: "LinkedIn Learning",
    date: "March, 2025",
    pdfPath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/certificates/CertificateOfCompletion_CSS%20Essential%20Training.pdf",
    imagePath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images/certificate-images/CertificateOfCompletion_CSS%20Essential%20Training.png",
  },
  {
    name: "Figma Essential Training: The Basics",
    issuer: "LinkedIn Learning",
    date: "May, 2025",
    pdfPath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/certificates/CertificateOfCompletion_Figma%20Essential%20Training%20The%20Basics.pdf",
    imagePath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images/certificate-images/CertificateOfCompletion_Figma%20Essential%20Training%20The%20Basics.png",
  },
  {
    name: "The Ultimate React Course 2025 React, Next.js, Redux & More",
    issuer: "Udemy",
    date: "September, 2025",
    pdfPath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/certificates/UC-69a971eb-bdcd-4754-b5cb-11372a3538bb%20(1).pdf",
    imagePath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images/certificate-images/UC-69a971eb-bdcd-4754-b5cb-11372a3538bb.jpg",
  },
  {
    name: "The Git & Github Bootcamp",
    issuer: "Udemy",
    date: "September, 2025",
    pdfPath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/certificates/UC-d5a73169-49b6-4c73-9904-0980bc2c5e63.pdf",
    imagePath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images/certificate-images/UC-d5a73169-49b6-4c73-9904-0980bc2c5e63.jpg",
  },
  {
    name: "Node.js, Express, MongoDB & More The Complete Bootcamp",
    issuer: "Udemy",
    date: "November, 2025",
    pdfPath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/certificates/UC-5f6259f7-7406-40d7-aa03-fca289894933%20(1).pdf",
    imagePath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images/certificate-images/UC-5f6259f7-7406-40d7-aa03-fca289894933.jpg",
  },
  {
    name: "React & TypeScript - The Practical Guide",
    issuer: "Udemy",
    date: "December, 2025",
    pdfPath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/certificates/UC-e7fb797e-2842-44c7-8522-ec9e5887abaf.pdf",
    imagePath:
      "https://gomfxmkebyzbqwrxvdkj.supabase.co/storage/v1/object/public/images/certificate-images/UC-e7fb797e-2842-44c7-8522-ec9e5887abaf.jpg",
  },
];

const StyledAbout = styled.div`
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

  h1 {
    margin: 2rem 0;
  }
`;

const StyledIntro = styled.div`
  margin-top: 2rem;
  margin-right: 2rem;
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

const StyledCertificateContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  align-items: flex-start;
  justify-content: center;
`;

function About() {
  return (
    <StyledAbout>
      <StyledIntro>
        <p>
          Electronics Engineering graduate and Design Engineer with a deep
          passion for web development. I specialize in creating modern,
          responsive applications with React, blending my engineering
          problem-solving skills with clean, user-focused design. Continuously
          learning through bootcamps and hands-on projects, currently finishing
          Docker course to strengthen my knowledge on deployments.
        </p>
        <p>Below are some of the technologies and tools I work with:</p>
      </StyledIntro>
      <TechStackArray tech_stack={tech_stack} />
      <h1>What I'm doing</h1>
      <StyledSkillContainer>
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </StyledSkillContainer>

      <h1>Certificates</h1>
      <StyledCertificateContainer>
        {certificates.map((certificate, index) => (
          <CertificateItem certificate={certificate} index={index} />
        ))}
      </StyledCertificateContainer>
    </StyledAbout>
  );
}

export default About;
