import { styled } from "styled-components";
import MainPanel from "./MainPanel";
import SidePanel from "./SidePanel";

const StyledAppLayout = styled.div`
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
  return (
    <StyledAppLayout>
      <SidePanel />
      <MainPanel />
    </StyledAppLayout>
  );
}

export default AppLayout;
