import React, { useState } from "react";

const Textform = (props) => {
  const [state, setState] = useState("");
  function handleChange(event) {
    setState(event.target.value);
  }
  function handleClickUP() {
    let uptext = state.toUpperCase();
    setState(uptext);
  }
  function handleClickLOW() {
    let lotext = state.toLowerCase();
    setState(lotext);
  }
  function handleClickClear() {
    setState("");
  }
  function handleCopyText() {
    let box = document.getElementById("exampleFormControlTextarea1");
    box.select();
    navigator.clipboard.writeText(box.value);
  }
  function handleExtraSpaces() {
    let newText = state.split(/[ ]+/);
    setState(newText.join(" "));
  }
  return (
    <>
      <div>
        <div className="mb-3 my-4">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            value={state}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-secondary mx-1 my-2" onClick={handleClickUP}>
          Convert to UpperCase
        </button>
        <button
          className="btn btn-secondary mx-1 my-2"
          onClick={handleClickLOW}
        >
          Convert to lowerCase
        </button>
        <button
          className="btn btn-secondary mx-1 my-2"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          className="btn btn-secondary mx-1 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-danger mx-1 my-2" onClick={handleClickClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-1"></div>
      <h3>Text Summary</h3>
      <p>
        Word Count:{state.split(" ").length} Letter:{state.length} <br />
        {state.split(" ").length * 0.005} Minutes to read
      </p>
      <h5>Preview</h5>
      <p>{state.length > 0 ? state : "Enter text above to preview here"}</p>
    </>
  );
};

export default Textform;
