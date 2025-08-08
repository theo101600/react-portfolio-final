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
import { AnimatePresence, motion } from "framer-motion";

const StyledModal = styled(motion.div)`
  position: fixed;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  background-color: var(--color-bg-0);
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.5s;
`;

const StyledContentContainer = styled.div`
  max-height: 80vh;
  width: 80vw;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 1rem;

  @media (max-width: 570px) {
    h1 {
      font-size: 3rem;
    }
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
`;

const MotionOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  background-color: var(--color-bg-2);
  border-radius: 8px;
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
    top: 1rem;
    right: 1rem;
    flex-direction: column-reverse;
    background: none;
    svg {
      width: 3.5rem;
    }
    svg:first-of-type {
      margin-bottom: 1.3rem;
    }
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

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: -80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
        mass: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeInOut",
      },
    },
  };

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
    <AnimatePresence>
      <MotionOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <StyledModal
          ref={ref}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <StyledButtonContainer onClick={(e) => e.stopPropagation()}>
            <DarkModeToggle />
            <button onClick={close}>
              <IoIosClose />
            </button>
          </StyledButtonContainer>
          <StyledContentContainer>{children}</StyledContentContainer>
        </StyledModal>
      </MotionOverlay>
    </AnimatePresence>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
