import React from 'react'
import Project from './Project'
import ProjectList from './ProjectList'

import { Link, RouteHandler } from 'react-router'

if (typeof window === undefined) {
  require('../../../css/nav.scss')
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <strong>&raquo;</strong> &nbsp;
          <Link to="/" activeClassName="active">Projects</Link>&nbsp;&middot;&nbsp;
          <Link to="/talks" activeClassName="active">Talks</Link>&nbsp;&middot;&nbsp;
        </div>
        <div><RouteHandler /></div>
      </div>
    );
  }
}
