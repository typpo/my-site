import Page from "../components/Page";

import PostList from "../components/PostList";
import FriendList from "../components/FriendList";
import Projects from "../components/Projects";
import TextProjects from "../components/TextProjects";

const Index = () => {
  return (
    <Page>
      <Projects />
      <TextProjects />
      <PostList />
      <FriendList />
    </Page>
  );
};

export default Index;
