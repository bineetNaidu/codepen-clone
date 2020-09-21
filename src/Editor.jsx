import React from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";

// STATICS
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml"; // HTML
import "codemirror/mode/javascript/javascript"; // JS
import "codemirror/mode/css/css"; // CSS
import "./Editor.css";

function Editor({ label, language, value, onChange }) {
  const handleChange = (editor, data, value) => onChange(value);
  return (
    <div className="editor-container">
      <div className="editor-title">
        {label}
        <button>O/C</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
}

export default Editor;
