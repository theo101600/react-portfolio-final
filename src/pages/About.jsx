import styled from "styled-components";
import SkillCard from "../ui/SkillCard";
import { FaCode } from "react-icons/fa6";
import { PiCircuitryFill } from "react-icons/pi";
import { IoIosCube } from "react-icons/io";
import ButtonIcon from "../ui/ButtonIcon";
import { MdFileDownload } from "react-icons/md";
import CertificateItem from "../ui/CertificateItem";

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
      <StyledCertificateContainer>
        {certificates.map((certificate, index) => (
          <CertificateItem certificate={certificate} index={index} />
        ))}
      </StyledCertificateContainer>
    </StyledAbout>
  );
}

export default About;
