import React from 'react';
import { Route, Router } from 'react-router';

//import { AppHandler, App, ProjectList, TalkList } from './components'
import AppHandler from './components/AppHandler'
import App from './components/App'
import ProjectList from './components/ProjectList'
import TalkList from './components/TalkList'
import PressList from './components/PressList'

if (typeof window === undefined) {
  require('../../css/main.scss')
}

export default (
  <Route path="/" handler={App}>
    <Route path="/" handler={ProjectList} />
    <Route path="talks" handler={TalkList} />
    <Route path="press" handler={PressList} />
  </Route>
);
