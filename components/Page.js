import Header from './Header';
import About from './About';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <About />
      {children}
    </div>
  )
}
