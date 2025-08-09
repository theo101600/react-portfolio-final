import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-text-a-0);
    background-color: var(--color-primary);

    &:hover {
      background-color: var(--color-primary-dark);
    }
  `,
  secondary: css`
    color: var(--color-text-a-0);
    background: var(--color-secondary);

    &:hover {
      background-color: var(--color-secondary-dark);
    }
  `,
};

const Button = styled(motion.button)`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  z-index: 5;

  ${({ size = "medium" }) => sizes[size]}
  ${({ variation = "primary" }) => variations[variation]}
`;

export default Button;
