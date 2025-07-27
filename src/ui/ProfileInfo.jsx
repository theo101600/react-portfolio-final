import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";
import { FaCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

const StyledProfileInfo = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    margin: 1.5rem;
  }
  button {
    margin-left: auto;
    background: transparent;
    border: none;
    color: var(--color-text-a-1);
    cursor: pointer;

    :hover {
      color: var(--color-primary);
    }
  }
  p:nth-of-type(1) {
    text-transform: uppercase;
    font-size: 1rem;
  }
  p:nth-of-type(2) {
    font-weight: bold;
  }
`;

function ProfileInfo({ icon, category, value }) {
  const [copied, setCopied] = useState(false);
  return (
    <StyledProfileInfo>
      {icon}
      <div>
        <p>{category}</p>
        <p>{value}</p>
      </div>
      <CopyToClipboard
        text={value}
        onCopy={() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
      >
        <button>{copied ? <FaCheck /> : <FaCopy />}</button>
      </CopyToClipboard>
    </StyledProfileInfo>
  );
}

export default ProfileInfo;
