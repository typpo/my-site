import React from 'react'
import Project from '../src/shared/components/Project'
import PostList from '../src/shared/components/PostList'
import FriendList from '../components/FriendList'
import projectData from '../data/projects.js'

if (typeof window === undefined) {
  require('../../../css/projects.scss')
  require('../../../css/genericlist.scss')
}

export default React.createClass({
  getInitialState() {
    return {
      data: projectData,
    };
  },
  render() {
    let projects = this.state.data.filter(project => {
      return !project.hideInProjectsView && project.imgurl;
    }).map((project, idx) => {
      return (
        <Project data={project} key={idx} />
      );
    });

    let textProjects = this.state.data.filter(project => {
      return !project.hideInProjectsView && !project.imgurl;
    }).map((project, idx) => {
      return (
        <li key={idx}><a href={project.url}>{project.title}</a> - {project.desc}</li>
      );
    });

    return (
      <div>
        <div className="project-list flex-container">
          {projects}
        </div>
        <div className="text-project-list generic-list">
          <h3>More projects</h3>
          <ul>
          {textProjects}
          </ul>
        </div>
        <PostList/>
        <FriendList/>
      </div>
    );
  },
})
