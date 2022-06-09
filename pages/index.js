import Header from '../components/Header';
import About from '../components/About';

import PostList from '../components/PostList';
import FriendList from '../components/FriendList';
import Projects from '../components/Projects';
import TextProjects from '../components/TextProjects';
import Talks from '../components/Talks';

const Index = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <TextProjects />
      <PostList/>
      <FriendList />
      <Talks />
    </>
  )
};

export default Index;