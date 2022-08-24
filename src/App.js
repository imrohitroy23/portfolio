import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Experience from './Components/Experience/Experience';
import Footer from "./Components/Footer/Footer";

import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import Intro from "./Components/Intro/Intro";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <Navbar />
      <Intro />

      <Services />
      <Experience/>
  
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
