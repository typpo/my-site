import React from 'react'
import Project from './Project'
import ProjectList from './ProjectList'

import { Link } from 'react-router'

import '../../../public/css/main.scss'

export default class AppHandler extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <strong>&raquo;</strong> Projects &middot;
          <Link to="/talks">Talks</Link> &middot;
          <Link to="/press">Press</Link>
        </div>
        <div>
          <ProjectList />
        </div>
      </div>
    );
  }
}
