import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

const StyledMarkdownViewer = styled.div`
  padding: 2rem;
  font-family: "Roboto", sans-serif;

  h1 {
    display: none;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-top: 1.5rem;
  }

  ul,
  ol {
    list-style-type: disc;
    margin-left: 1.5rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.4rem;
  }

  code {
    background: var(--color-bg-2);
    padding: 0.2em 0.4em;
    border-radius: 4px;
    font-family: monospace;
  }

  pre code {
    display: block;
    padding: 1rem;
    overflow-x: auto;
    background-color: var(--color-bg-2);
    border-radius: 8px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }

  th,
  td {
    border: 1px solid var(--color-bg-1);
    padding: 0.6rem;
    text-align: left;
  }

  th {
    background-color: var(--color-bg-2);
  }

  img {
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
    border-radius: 8px;
  }
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
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </StyledMarkdownViewer>
  );
}

export default MarkdownViewer;
