import { useLocalStorage } from "./hooks/useLocalStorage";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Output from "./pages/Output";

export default function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");

  let srcDoc = `
    <html>
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          ${js}
        </script>
      </body>
    </html>
  `;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              html={html}
              css={css}
              js={js}
              setHtml={setHtml}
              setCss={setCss}
              setJs={setJs}
              srcDoc={srcDoc}
            />
          }
        />
        <Route path="/output" element={<Output srcDoc={srcDoc} />} />
      </Routes>
    </>
  );
}
