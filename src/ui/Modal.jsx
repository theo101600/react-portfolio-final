import { IoIosClose } from "react-icons/io";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import { createPortal } from "react-dom";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

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

  @media (max-width: 800px) {
    top: 1.5rem;
    right: 1.5rem;
    flex-direction: column-reverse;
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => {
      open(opensWindowName);
    },
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useRef();

  useEffect(
    function () {
      if (name !== openName) {
        return;
      }

      console.log(`Modal "${name}" is rendering - run the real logic`);

      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Clicked outside!");
          close();
        }
      }

      function handleKeyDown(e) {
        if (e.key === "Escape") {
          console.log("ESC key pressed!");
          close();
        }
      }

      const timer = setTimeout(() => {
        document.addEventListener("click", handleClick);
        document.addEventListener("keydown", handleKeyDown);
      }, 100);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("click", handleClick);
        document.removeEventListener("keydown", handleKeyDown);
      };
    },
    [close, name, openName]
  );

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <StyledButtonContainer onClick={(e) => e.stopPropagation()}>
          <DarkModeToggle />
          <button onClick={close}>
            <IoIosClose />
          </button>
        </StyledButtonContainer>
        <StyledContentContainer>{children}</StyledContentContainer>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
