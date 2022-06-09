import Header from './Header';
import About from './About';

const Page = ({ children }) => {
  return (
    <div>
      <Header />
      <About />
      {children}
    </div>
  )
};

export default Page;