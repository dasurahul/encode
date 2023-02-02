import { useState } from "react";

import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Output from "./pages/Output";

export default function App() {
  // states
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  // srcDoc for iframe
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
