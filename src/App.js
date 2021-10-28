import About from "./components/about";
import Navbar from "./components/navbar";
import Textform from "./components/textform";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#181818";
      document.body.style.color = "white";
      // document.title = "TextUtils -Dark";
    } else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      // document.title = "TextUtils -Light";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Route exact path="/">
          <div className="container">
            <Textform mode={mode} />
          </div>
        </Route>
        <Route exact path="/about">
          <div className="container">
            <About mode={mode} />
          </div>
        </Route>
      </Router>
    </>
  );
}

export default App;
