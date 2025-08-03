import { IoIosClose } from "react-icons/io";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-bg-0);
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.5s;
`;

const StyledContentContainer = styled.div`
  max-height: 80vh; /* key for scroll behavior */
  width: 80vw; /* optional: ensure good width */
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 1rem;

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
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

// const Button = styled.button`
//   /* background: none;
//   border: none;
//   padding: 0.4rem;
//   position: absolute;
//   font-size: 50px;
//   top: 2rem;
//   right: 3rem;
//   :hover {
//     color: var(--color-primary);
//   } */
// `;

const StyledDarkModeToggle = styled.div`
  /* position: absolute;
  top: 3rem;
  right: 4rem;
  svg {
  } */
`;

const StyledButtonContainer = styled.div`
  display: flex;
  background: none;
  border: none;
  position: absolute;
  top: 2.5rem;
  right: 4rem;
  button {
    background: none;
    border: none;
    svg {
      font-size: 50px;
    }
  }
  :hover {
    color: var(--color-primary);
  }
`;

function Modal({ children, onClose }) {
  return (
    <Overlay>
      <StyledModal>
        <StyledButtonContainer>
          <DarkModeToggle />
          <button onClick={onClose}>
            <IoIosClose />
          </button>
        </StyledButtonContainer>

        <StyledContentContainer>{children}</StyledContentContainer>
      </StyledModal>
    </Overlay>
  );
}

export default Modal;
