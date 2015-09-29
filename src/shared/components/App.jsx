import React from 'react'
import Project from './Project'
import ProjectList from './ProjectList'

import { Link, RouteHandler } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <strong>&raquo;</strong> &nbsp;
          <Link to="/">Projects</Link> &middot;
          <Link to="/talks">Talks</Link> &middot;
          <Link to="/press">Press</Link>
        </div>
        <div><RouteHandler /></div>
      </div>
    );
  }
}
