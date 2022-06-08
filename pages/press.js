import React from 'react'
import Press from '../components/Press'
import projectData from '../data/projects.js'

export default React.createClass({
  getInitialState() {
    return {
      data: projectData,
    };
  },
  render() {
    let press = this.state.data.filter(project => {
      return project.press && project.press.length > 0;
    }).map((project, idx) => {
      return (
        <div key={idx} className="press-item">
          <span className="title">{project.title}</span>
          <Press data={project} />
        </div>
      );
    });
    return (
      <div className="press-list">
        <h2>Best-effort press compilation</h2>
        {press}
      </div>
    );
  },
})
