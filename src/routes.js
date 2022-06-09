import React from "react";
import { Route, Router } from "react-router";

//import { AppHandler, App, ProjectList, TalkList } from './components'
import App from "./components/App";
import HackList from "./components/HackList";
import PressList from "./components/PressList";
import ProjectList from "./components/ProjectList";
import TalkList from "./components/TalkList";

// NOTE anything here must be added to server.js too.
export default (
  <Route path="/" handler={App}>
    <Route path="/" handler={ProjectList} />
    <Route path="talks" handler={TalkList} />
    <Route path="press" handler={PressList} />
    <Route path="hackathons" handler={HackList} />
  </Route>
);
