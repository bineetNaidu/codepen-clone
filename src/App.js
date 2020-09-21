import React, { useState } from "react";
import Editor from "./Editor";

// STATICS
import "./App.css";

function App() {
  // STATES
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");

  // HOOKS && CONTEXTS

  // FUNCTIONS
  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml" label="HTML" onChange={setHtml} value={html} />
        <Editor language="css" label="CSS" onChange={setCss} value={css} />
        <Editor
          language="javascript"
          label="JS"
          onChange={setJavascript}
          value={javascript}
        />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder={0}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
