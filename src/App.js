import React from "react";
import Editor from "./Editor";

// STATICS
import "./App.css";

function App() {
  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml" label="HTML" onChange={} value={} />
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
