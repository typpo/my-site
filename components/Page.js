import Header from './Header';
import About from './About';

import PostList from './PostList';
import FriendList from './FriendList';
import Projects from './Projects';
import TextProjects from './TextProjects';
import Talks from './Talks';

const Page = ({ children }) => {
  return (
    <div>
      <Header />
      <About />
      {children}
      <Projects />
      <TextProjects />
      <PostList/>
      <FriendList />
      <Talks />
    </div>
  )
};

export default Page;