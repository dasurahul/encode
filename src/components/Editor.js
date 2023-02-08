import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";

import "ace-builds/src-noconflict/theme-twilight";

export default function Editor(props) {
  const { language, value, setValue } = props;
  return (
    <div className="overflow-hidden">
      <span className="h-8 p-1">
        {language === "html"
          ? "HTML"
          : language === "css"
          ? "CSS"
          : language === "javascript"
          ? "JS"
          : language}
      </span>
      <AceEditor
        name={`ace-editor-${language}`}
        mode={language}
        theme="twilight"
        height="300px"
        onChange={(value) => setValue(value)}
        value={value}
        setOptions={{
          useWorker: false,
        }}
      />
    </div>
  );
}
