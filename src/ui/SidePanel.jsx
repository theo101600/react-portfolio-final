import { styled } from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import ProfileImage from "./ProfileImage";
import { BsPersonBoundingBox } from "react-icons/bs";
import ProfileInfo from "./ProfileInfo";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import Socials from "./Socials";
import { useNavigate } from "react-router";

const StyledSidePanel = styled.div`
  background-color: var(--color-bg-1);
  border-radius: 8px;
  margin: 0 5px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 6rem);

  h1 {
    font-weight: 300;
    font-family: "Roboto", sans-serif;
    font-optical-sizing: auto;

    font-style: normal;
    font-variation-settings: "wdth" 100;
  }

  span {
    background-color: var(--color-bg-0);
    padding: 0.3rem 1rem;
    border-radius: 8px;
    font-weight: 600;
  }

  hr {
    width: 90%;
    border: none;
    border-top: 2px solid var(--color-bg-2);
    margin: 2.5rem 0;
  }

  div:last-child {
    margin-top: auto;
  }

  @media (max-width: 1150px) {
    display: none;
  }
`;

const StyledProfileIcon = styled.div`
  margin: 2rem 0;
`;

const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: var(--color-bg-1);
  color: var(--color-text-light);
  font-size: 0.9rem;
  border-top: 1px solid var(--color-border);
`;

function SidePanel() {
  const navigate = useNavigate();

  return (
    <StyledSidePanel>
      <StyledProfileIcon>
        <BsPersonBoundingBox
          onClick={() => {
            navigate("/");
          }}
          size={100}
        />
      </StyledProfileIcon>
      <h1>Theo Lacanaria</h1>
      <span>Web Developer</span>
      <hr />
      <ProfileInfo
        icon={<MdEmail size={32} />}
        category={"Email"}
        value={"theo.lacanaria@gmail.com"}
      />
      <ProfileInfo
        icon={<IoMdPhonePortrait size={32} />}
        category={"Phone"}
        value={"+63 952318536"}
      />
      <ProfileInfo
        icon={<FaMapLocationDot size={32} />}
        category={"Location"}
        value={"Tarlac, Philippines"}
      />
      <StyledFooterContainer>
        <Socials />
        <Footer>
          Built with <strong>React</strong> | © 2025 Theo Lacanaria
        </Footer>
      </StyledFooterContainer>
    </StyledSidePanel>
  );
}

export default SidePanel;
