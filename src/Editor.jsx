import React from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import useToggle from "./custom/hooks/useToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

// STATICS
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml"; // HTML
import "codemirror/mode/javascript/javascript"; // JS
import "codemirror/mode/css/css"; // CSS
import "./Editor.css";

function Editor({ label, language, value, onChange }) {
  // STATES

  // HOOKS && CONTEXTS
  const [open, toggleOpen] = useToggle(); // default to false

  // FUNCTIONS

  const handleChange = (editor, data, value) => onChange(value);
  return (
    <div className={`editor-container ${open && "collapsed"}`}>
      <div className="editor-title">
        {label}
        <button
          onClick={toggleOpen}
          type="button"
          className="expand-collapse-btn"
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
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
