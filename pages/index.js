import Page from "../components/Page";

import PostList from "../components/PostList";
import FriendList from "../components/FriendList";
import Projects from "../components/Projects";
import TextProjects from "../components/TextProjects";
import Talks from "../components/Talks";

const Index = () => {
  return (
    <Page>
      <Projects />
      <TextProjects />
      <PostList />
      <FriendList />
      <Talks />
    </Page>
  );
};

export default Index;
