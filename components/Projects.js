import Project from './Project';
import projectData from '../data/projects.js';

let projects = projectData
  .filter((project) => {
    return !project.hideInProjectsView && project.imgurl;
  })
  .map((project, idx) => {
    project.isPriority = idx < 8; // first 2 rows are above the fold.
    return <Project data={project} key={idx} />;
  });

const Projects = () => {
  return (
    <div>
      <div className="project-list flex-container">{projects}</div>
    </div>
  );
};

export default Projects;
