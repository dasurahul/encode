import Header from "../components/Header";
import Editor from "../components/Editor";

export default function Home(props) {
  const { html, css, js, setHtml, setCss, setJs, srcDoc } = props;
  return (
    <div className="h-screen bg-slate-900 text-gray-50">
      <Header />
      <div className="p-4 grid grid-cols-3 gap-4">
        <Editor language="html" value={html} setValue={setHtml} />
        <Editor language="css" value={css} setValue={setCss} />
        <Editor language="javascript" value={js} setValue={setJs} />
      </div>
      <div className="bg-white h-[calc(100vh_-_404px)]">
        <iframe
          className="w-full h-full"
          title="output"
          srcDoc={srcDoc}
        ></iframe>
      </div>
    </div>
  );
}
