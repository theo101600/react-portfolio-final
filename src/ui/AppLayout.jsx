import { styled } from "styled-components";
import MainPanel from "./MainPanel";
import SidePanel from "./SidePanel";
import { motion } from "framer-motion";

const StyledAppLayout = styled(motion.div)`
  background-color: var(--color-bg-2);
  padding: 2.4rem;
  display: grid;
  grid-template-columns: 40rem 1fr;
  height: 100vh;

  @media (max-width: 1150px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 550px) {
    padding: 0.3rem;
  }
`;

function AppLayout() {
  const layoutVariants = {
    hidden: {
      y: -100,
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      y: -100,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <StyledAppLayout
      variants={layoutVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <SidePanel />
      <MainPanel />
    </StyledAppLayout>
  );
}

export default AppLayout;
