import { useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { Link } from "react-router-dom";

// images
import logo from "../assets/logo.svg";
import pencil from "../assets/pencil.svg";
import link from "../assets/link.svg";

export default function Header() {
  const [projectName, setProjectName] = useLocalStorage(
    "ProjectName",
    "Encode by rahul"
  );
  const projectNameRef = useRef();
  function rename() {
    setProjectName("");
    projectNameRef.current.focus();
  }
  return (
    <div className="h-12 px-4 flex justify-between items-center">
      <div className="flex items-center gap-1">
        <img className="w-8" src={logo} alt="logo" />
        <input
          className="bg-transparent text-lg outline-none"
          type="text"
          value={projectName}
          tabIndex="-1"
          ref={projectNameRef}
          onChange={(event) => setProjectName(event.target.value)}
        />
        <button
          className="p-2 rounded-md hover:bg-gray-800"
          title="rename"
          onClick={rename}
        >
          <img className="w-6" src={pencil} alt="pencil" />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <Link
          className="p-2 rounded-md hover:bg-gray-800"
          title="open in full screen"
          to="/output"
        >
          <img className="w-6" src={link} alt="link" />
        </Link>
      </div>
    </div>
  );
}
