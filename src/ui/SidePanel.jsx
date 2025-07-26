import { styled } from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";

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

  @media (max-width: 1150px) {
    display: none;
  }
`;

function SidePanel() {
  return (
    <StyledSidePanel>
      <ProfileImage />
      <h1>Theo Lorem Ipsum</h1>
      <span>Web Developer</span>
      <hr />
      <ProfileInfo
        icon={<MdEmail size={32} />}
        category={"Email"}
        value={"theo@example.com"}
      />
      <ProfileInfo
        icon={<IoMdPhonePortrait size={32} />}
        category={"Phone"}
        value={"+63 969696969"}
      />
      <ProfileInfo
        icon={<FaMapLocationDot size={32} />}
        category={"Location"}
        value={"Somewhere, Philippines"}
      />
    </StyledSidePanel>
  );
}

export default SidePanel;
