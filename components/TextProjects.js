import projectData from "../data/projects.js";

const TextProjects = () => {
  let textProjects = projectData
    .filter((project) => {
      return !project.hideInProjectsView && !project.imgurl;
    })
    .map((project, idx) => {
      return (
        <li key={idx}>
          <a href={project.url}>{project.title}</a> - {project.desc}
        </li>
      );
    });
  return (
    <div className="text-project-list generic-list">
      <h3>More projects</h3>
      <ul>{textProjects}</ul>
    </div>
  );
};

export default TextProjects;
