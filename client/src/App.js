import React, { useState } from "react";
import Copy from "./icons/Copy.icons";
import Delete from "./icons/Delete.icons";
import Editor from "@monaco-editor/react";

const App = () => {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    console.log("Run button clicked");
  };

  return (
    <main className="app">
      <header className="header__container">
        <div className="header">
          <h3>JSON</h3>
          <div className="header__right">
            <button className="runBtn" onClick={handleSubmit}>
              RUN
            </button>
            <Delete />
          </div>
        </div>
        <div>
          <h3>Typescript</h3>
          <Copy />
        </div>
      </header>
      <div className="code__container">
        <div className="code">
          <Editor
            height="90vh"
            className="editor"
            defaultLanguage="json"
            defaultValue="{}"
            value={value}
            onChange={(value) => setValue(value)}
          />
        </div>
        <div className="output">
          <Editor
            height="90vh"
            className="editor"
            defaultLanguage="typescript"
            defaultValue=""
            options={{
              domReadOnly: true,
              readOnly: true,
            }}
            value={output}
            onChange={(value) => setOutput(value)}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
