import { useNavigate } from "react-router";
import styled from "styled-components";

const StyledProfileImage = styled.div`
  text-align: center;
`;
const Img = styled.img`
  height: 20rem;
  width: auto;
`;

function ProfileImage() {
  const navigate = useNavigate();

  const src = "profile-image.jpg";
  return (
    <StyledProfileImage>
      <Img
        onClick={() => {
          navigate("/");
        }}
        src={src}
        alt="Profile Image"
      />
    </StyledProfileImage>
  );
}

export default ProfileImage;
