import styles from "./style";
import { BrowserRouter } from "react-router-dom";
import { 
  Navbar,
  Home,
  About,
  Subscribe,
  Footer,
  Pricing,
  Contact,
  Faq,
} from "./components";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div className='relative z-0 bg-[#faf3f3] overflow-hidden'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Home />
          <About />
          <Pricing />
          <Subscribe />
          {/* <Faq /> */}
          <Contact />
          <Footer />
        </div>
      </div>
   </BrowserRouter>    
  </div>
);

export default App;
