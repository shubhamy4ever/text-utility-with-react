// import About from "./components/about";
import Navbar from "./components/navbar";
import Textform from "./components/textform";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#181818";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Textform heading="Analyse your text" mode={mode} />
      </div>
      {/* <div className="container">
        <About />
      </div> */}
    </>
  );
}

export default App;
