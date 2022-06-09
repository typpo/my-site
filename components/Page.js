import Header from './Header';
import About from './About';

import PostList from './PostList';
import FriendList from './FriendList';
import TextProjects from './TextProjects';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <About />
      {children}
      <TextProjects />
      <PostList/>
      <FriendList />
    </div>
  )
}
