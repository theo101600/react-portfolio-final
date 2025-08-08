import { useSearchParams } from "react-router";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  margin: 1rem;
  align-items: center;
  justify-content: flex-end;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  border-radius: 8px;
  background-color: var(--color-bg-0);
`;

const StyledButton = styled.button`
  background-color: var(--color-bg-0);
  margin: 0.7rem;
  border: none;
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;
  color: var(--color-text-a-0);

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-primary);
      color: var(--color-text-b-0);
    `}

  &:hover {
    background-color: var(--color-primary);
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      <StyledButtonContainer>
        {options.map((option) => (
          <StyledButton
            key={option.value}
            onClick={() => handleClick(option.value)}
            active={option.value === currentFilter}
          >
            {option.label}
          </StyledButton>
        ))}
      </StyledButtonContainer>
    </StyledFilter>
  );
}

export default Filter;
