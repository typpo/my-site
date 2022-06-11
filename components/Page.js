import Header from "./Header";
import About from "./About";
import QuickSwitcher from "./QuickSwitcher";

const Page = ({ children }) => {
  
  return (
    <div>
      <Header />
      <About />
      <QuickSwitcher />
      {children}
    </div>
  );
};

export default Page;
