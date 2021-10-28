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
  function handleRandomText() {
    let newtext =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est beatae rem iure? Natus voluptas velit esse ea asperiores eum beatae exercitationem, et iste sit fuga libero dignissimos aut, voluptatibus nisi quam totam tempore ut, consectetur eius incidunt dolor iure nihil?";
    setState(newtext);
  }
  return (
    <>
      <div>
        <div className="mb-3 my-4">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1>Analyze Your Text</h1>
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
        <button
          className="btn btn-secondary mx-1 my-2"
          onClick={handleClickUP}
          disabled={
            state.split(" ").filter((element) => {
              return element !== "";
            }).length > 0
              ? false
              : true
          }
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-secondary mx-1 my-2"
          onClick={handleClickLOW}
          disabled={
            state.split(" ").filter((element) => {
              return element !== "";
            }).length > 0
              ? false
              : true
          }
        >
          Convert to lowerCase
        </button>
        <button
          className="btn btn-secondary mx-1 my-2"
          onClick={handleCopyText}
          disabled={
            state.split(" ").filter((element) => {
              return element !== "";
            }).length > 0
              ? false
              : true
          }
        >
          Copy Text
        </button>
        <button
          className="btn btn-secondary mx-1 my-2"
          onClick={handleExtraSpaces}
          disabled={
            state.split(" ").filter((element) => {
              return element !== "";
            }).length > 0
              ? false
              : true
          }
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={handleRandomText}
        >
          Random Text
        </button>
        <button
          className="btn btn-danger mx-1 my-2"
          onClick={handleClickClear}
          disabled={state.length > 0 ? false : true}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-1"></div>
      <h3>Text Summary</h3>
      <p>
        Word Count:
        {
          state.split(/\s+/).filter((element) => {
            return element !== "";
          }).length
        }{" "}
        Letter:{state.length} <br />
        {state.split(" ").filter((element) => {
          return element !== "";
        }).length * 0.005}{" "}
        Minutes to read
      </p>
      <h5>Preview</h5>
      <p>{state.length > 0 ? state : "Enter text above to preview here"}</p>
    </>
  );
};

export default Textform;
