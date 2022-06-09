import Project from "./Project";
import projectData from "../data/projects.js";

const Projects = () => {
  let projects = projectData
    .filter((project) => {
      return !project.hideInProjectsView && project.imgurl;
    })
    .map((project, idx) => {
      return <Project data={project} key={idx} />;
    });

  return (
    <div>
      <div className="project-list flex-container">{projects}</div>
    </div>
  );
};

export default Projects;
