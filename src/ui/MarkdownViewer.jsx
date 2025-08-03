import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const StyledMarkdownViewer = styled.div`
  padding: 1rem;
`;

function MarkdownViewer({ markdown }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(markdown)
      .then((res) => res.text())
      .then(setContent)
      .catch((err) => console.error("Failed to load markdown:", err));
  }, [markdown]);

  return (
    <StyledMarkdownViewer>
      <ReactMarkdown>{content}</ReactMarkdown>
    </StyledMarkdownViewer>
  );
}

export default MarkdownViewer;
