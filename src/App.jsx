import "./App.css";
import "./scss/custom.scss";
import "./styles.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

import { QueryClient, QueryClientProvider } from "react-query";

import About from "./components/About";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <NavBar />

        <main>
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </main>

        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
