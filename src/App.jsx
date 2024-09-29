import Home from "./pages/home";
import Navbar from '../src/components/Navbar';
import Skills from '../src/pages/Skills';
import Hobbies from '../src/pages/Hobbies'; 
import Technology from '../src/pages/Technology';
import Contacts from '../src/pages/Contact'; 


function App() {
  return (
    <>
    <div>
      {/* <Navbar/>
      <Intro/> */}
      {/* <Home/> */}
      {/* Add your routes here */}
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route exact path="/about" component={About} /> */}
      {/* <Route exact path="/contact" component={Contact} /> */}
      {/* <Route exact path="/services" component={Services} /> */}
      {/* <Route exact path="/projects" component={Projects} /> */}
      {/* <Route exact path="/blog" component={Blog} /> */}
      {/* <Route exact path="/blog/:id" component={BlogPost} /> */}
      {/* <Route exact path="/careers" component={Careers} /> */}
      {/* <Route exact path="/careers/:id" component={CareerDetails} /> */}
      {/* <Route exact path="/faq" component={FAQ} /> */}
      {/* <Route exact path="/terms" component={Terms} /> */}
      {/* <Route exact path="/privacy" component={Privacy} /> */}

      <div className="scroll-smooth">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="hobbies">
        <Hobbies />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="technology">
        <Technology />
      </div>
      <div id="contacts">
        <Contacts />
      </div>
    </div>
    
    </div>
    </>
  )
}

export default App;
