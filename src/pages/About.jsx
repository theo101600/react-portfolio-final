import styled from "styled-components";
import SkillCard from "../ui/SkillCard";
import { FaCode } from "react-icons/fa6";
import { PiCircuitryFill } from "react-icons/pi";
import { IoIosCube } from "react-icons/io";
import ButtonIcon from "../ui/ButtonIcon";
import { MdFileDownload } from "react-icons/md";

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
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2024",
    pdfPath: "/certificates/js-cert.pdf",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    pdfPath: "/certificates/sample-pdf.pdf",
  },
  {
    name: "SOLIDWORKS Professional Certification",
    issuer: "Dassault Systèmes",
    date: "2023",
    pdfPath: "/certificates/js-cert.pdf",
  },
  {
    name: "SOLIDWORKS Professional Certification",
    issuer: "Dassault Systèmes",
    date: "2023",
    pdfPath: "/certificates/js-cert.pdf",
  },
  {
    name: "SOLIDWORKS Professional Certification",
    issuer: "Dassault Systèmes",
    date: "2023",
    pdfPath: "/certificates/js-cert.pdf",
  },
  {
    name: "SOLIDWORKS Professional Certification",
    issuer: "Dassault Systèmes",
    date: "2023",
    pdfPath: "/certificates/js-cert.pdf",
  },
  {
    name: "SOLIDWORKS Professional Certification",
    issuer: "Dassault Systèmes",
    date: "2023",
    pdfPath: "/certificates/js-cert.pdf",
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
`;

const StyledCertificateItem = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--color-bg-0);
`;

const StyledCertificateInfo = styled.div`
  flex: 1;

  h3 {
    margin: 0 0 0.5rem 0;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

function About() {
  const handleDownload = (pdfPath, fileName) => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <StyledCertificateItem key={index}>
            <StyledCertificateInfo>
              <h3>{certificate.name}</h3>
              <p>
                {certificate.issuer} • {certificate.date}
              </p>
            </StyledCertificateInfo>
            <ButtonIcon
              onClick={() =>
                handleDownload(
                  certificate.pdfPath,
                  `${certificate.name.replace(/\s+/g, "_")}.pdf`
                )
              }
            >
              <MdFileDownload />
            </ButtonIcon>
          </StyledCertificateItem>
        ))}
      </StyledCertificateContainer>
    </StyledAbout>
  );
}

export default About;
