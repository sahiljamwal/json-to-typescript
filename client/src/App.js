import React, { useState } from "react";
import Copy from "./icons/Copy.icons";
import Delete from "./icons/Delete.icons";
import Editor from "@monaco-editor/react";
import { convertJsonToTypeScript } from "./services/api.services";
import Loading from "./components/Loading.components";
import { CopyToClipboard } from "react-copy-to-clipboard";

const App = () => {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await convertJsonToTypeScript(value);
      setLoading(false);
      setOutput(data);
    } catch (err) {
      setLoading(false);
    }
  };

  const copyToClipBoard = () => alert(`Copied ✅`);

  return (
    <main className="app">
      <header className="header__container">
        <div className="header">
          <h3>JSON</h3>
          <div className="header__right">
            <button className="runBtn" onClick={handleSubmit}>
              RUN
            </button>
            <Delete setValue={setValue} />
          </div>
        </div>
        <div>
          <h3>Typescript</h3>
          <CopyToClipboard text={output} onCopy={copyToClipBoard}>
            <span>
              <Copy />
            </span>
          </CopyToClipboard>
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

        {loading ? (
          <Loading />
        ) : (
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
        )}
      </div>
    </main>
  );
};

export default App;
