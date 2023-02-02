import MonacoEditor from "react-monaco-editor";

export default function Editor(props) {
  const { language, value, setValue } = props;
  return (
    <div>
      <span className="bg-[#1E1E1E] h-8 p-1">
        {language === "html"
          ? "HTML"
          : language === "css"
          ? "CSS"
          : language === "javascript"
          ? "JS"
          : language}
      </span>
      <MonacoEditor
        height={300}
        language={language}
        onChange={(value) => setValue(value)}
        value={value}
        theme="vs-dark"
      />
    </div>
  );
}
