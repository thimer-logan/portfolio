import "./App.css";
import "./scss/custom.scss";
import "./styles.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Home from "./components/Home";
import Experience from "./components/Experience";

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Home />
                <About />
                <Experience />
                <Projects />
                <Education />
            </main>

            <Footer />
        </div>
    );
}

export default App;
