import React, { useState, useEffect } from "react";
import Editor from "./Editor";

// STATICS
import "./App.css";

function App() {
  // STATES
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  // HOOKS && CONTEXTS
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSrcDoc(`
      <html>
  <style>${css}</style>
  <body>${html}</body>
  <script>${javascript}</script>
  </html>
  `);
    }, 250);

    return () => clearTimeout(timeoutId);
  }, [html, css, javascript]);

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
          srcDoc={srcDoc}
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
