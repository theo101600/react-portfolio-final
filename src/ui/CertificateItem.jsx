import { useState } from "react";
import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { MdFileDownload } from "react-icons/md";

const StyledCertificateImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-top: 0.5rem;
  border-radius: 4px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  max-height: ${(props) => (props.visible ? "500px" : "0")};
  overflow: hidden;
  transition: opacity 0.2s ease-in, max-height 0.2s ease-in;
`;

const StyledCertificateItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100px;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--color-bg-0);
  transition: background-color 0.3s ease, height 0.3s ease;
  position: relative;

  ${(props) =>
    props.expanded &&
    `
    height: auto;
  `}
`;

const StyledCertificateContent = styled.div`
  display: flex;
  margin-bottom: 1rem;
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

function CertificateItem({ certificate }) {
  const [isHovered, setIsHovered] = useState(false);

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
    <StyledCertificateItem
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      expanded={isHovered}
    >
      <StyledCertificateContent>
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
      </StyledCertificateContent>
      <StyledCertificateImage
        src={certificate.imagePath}
        alt={certificate.name}
        visible={isHovered}
      />
    </StyledCertificateItem>
  );
}

export default CertificateItem;
