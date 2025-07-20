import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  margin: 0 2rem;
  transition: all 0.2s;

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-text-a-0);
  }

  &:hover svg {
    color: var(--color-primary);
  }
`;

export default ButtonIcon;
