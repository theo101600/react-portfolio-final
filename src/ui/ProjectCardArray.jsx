import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import React, { useEffect, useState } from "react";
import ProjectContent from "./ProjectContent";
import { useProjects } from "../hooks/useProjects";
import { Bouncy } from "ldrs/react";

const StyledProjectCardArray = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
`;

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
`;

// const projects = [
//   {
//     id: "1d3b2a12-49f6-42be-8c23-51d3fdsfsa0f07f67",
//     title: "Yelp Camp",
//     description:
//       "A responsive and modern portfolio website built with React and styled-components.",
//     type: "web-app",
//     tech_stack: [
//       "React",
//       "StyledComponents",
//       "Supabase",
//       "TailwindCSS",
//       "MongoDB",
//       "JavaScript",
//       "NodeJs",
//       "NextJs",
//       "Redux",
//       "ReduxToolkit",
//       "ReactQuery",
//       "ReactRouter",
//       "HTML5",
//       "CSS3",
//       "KiCad",
//       "Leaflet",
//       "npm",
//       "git",
//       "github",
//       "Figma",
//       "Postman",
//       "Bootstrap",
//       "SolidWorks",
//       "VisualStudioCode",
//       "VisualStudio",
//       "AndroidStudio",
//       "Blender",
//       "Photoshop",
//       "Illustrator",
//       "FreeCad",
//     ],
//     image_url:
//       "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     project_url: "https://yourname.vercel.app",
//     github_url: "https://github.com/yourusername/portfolio",
//     created_at: "2025-07-25T14:20:00Z",
//     markdown: "/markdowns/YelpCamp.md",
//   },
//   {
//     id: "ef760cd9-4a5d-41fd-8f02-3c16afsads93e8963",
//     title: "World Wise",
//     description:
//       "A simple full-stack task tracker using Supabase for real-time updates.",
//     type: "web-app",
//     tech_stack: ["React", "Supabase", "TailwindCSS"],
//     image_url:
//       "https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     project_url: "https://tasktracker.vercel.app",
//     github_url: "https://github.com/yourusername/task-tracker",
//     created_at: "2025-07-15T10:45:00Z",
//     markdown: "/markdowns/WorldWise.md",
//   },
//   {
//     id: "a48f3e98-eacf-44c6-b4a5-bf90fsdafsfashgh1b8e91e0",
//     title: "Wild Oasis",
//     description: "A headless markdown-based CMS using Supabase as the backend.",
//     type: "web-app",
//     tech_stack: ["NextJs", "Supabase", "MongoDB"],
//     image_url:
//       "https://images.unsplash.com/photo-1629401037347-c8d13f4f97f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     project_url: "https://markdowncms.vercel.app",
//     github_url: "https://github.com/yourusername/markdown-cms",
//     created_at: "2025-07-10T08:15:00Z",
//     markdown: "/markdowns/YelpCamp.md",
//   },
//   {
//     id: "a48f3e98-fdsa-7423-4321-bf901kjhghgkb8e91e0",
//     title: "Cylinder Timer",
//     description: "A headless markdown-based CMS using Supabase as the backend.",
//     type: "electronics",
//     tech_stack: ["KiCad", "SolidWorks", "FreeCad"],
//     image_url:
//       "https://images.unsplash.com/photo-1677429063763-45a6a49c1baf?q=80&w=1058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     project_url: "",
//     github_url: "",
//     created_at: "2025-07-10T08:15:00Z",
//     markdown: "/markdowns/YelpCamp.md",
//   },
//   {
//     id: "a48f3e98-426h-fdag-5742-bf901kjhggkghb8e91e0",
//     title: "IECEP Trophy Design",
//     description: "A headless markdown-based CMS using Supabase as the backend.",
//     type: "3d",
//     tech_stack: ["KiCad", "SolidWorks", "FreeCad"],
//     image_url:
//       "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     project_url: "",
//     github_url: "https://github.com/yourusername/markdown-cms",
//     created_at: "2025-07-10T08:15:00Z",
//     markdown: "/markdowns/YelpCamp.md",
//   },
// ];

function ProjectCardArray() {
  const { projects, isLoading, isError } = useProjects();
  const [computedColor, setComputedColor] = useState("");

  useEffect(() => {
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-primary")
      .trim();
    setComputedColor(color);
  }, []);

  if (isLoading)
    return (
      <StyledLoader>
        <Bouncy className="loader" size="45" speed="1" color={computedColor} />
      </StyledLoader>
    );

  if (isError) return <h3>Something went wrong</h3>;

  return (
    <StyledProjectCardArray>
      <Modal>
        {projects.map((project) => (
          <React.Fragment key={project.id}>
            <Modal.Open opens={project.title}>
              <ProjectCard project={project} />
            </Modal.Open>
            <Modal.Window name={project.title}>
              <ProjectContent project={project} />
            </Modal.Window>
          </React.Fragment>
        ))}
      </Modal>
    </StyledProjectCardArray>
  );
}

export default ProjectCardArray;
