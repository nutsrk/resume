import { useState } from "react";
import { useHistory } from "react-router";

const NavBar = () => {
  const history = useHistory();
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="flex flex-row justify-between pt-10 pointer-events-auto">
      <div className="flex font-bold">
        <h1 className="text-yellow-500" data-cy="firstname">Sirirak </h1>
        <h1 className="ml-2 "data-cy="lastname">Witoon</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 font-bold">
        <h1
          onClick={() => history.push("/home")}
          className="cursor-pointer hover:underline"
        >
          Home
        </h1>
        <h1
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          className="cursor-pointer hover:underline"
        >
          Resume
        </h1>
        <h1
          onClick={() => history.push("/work")}
          className="cursor-pointer hover:underline"
        >
          Works
        </h1>
        <h1
          onClick={() => history.push("/contacts")}
          className="cursor-pointer hover:underline"
        >
          Contacts
        </h1>{" "}
      </div>
      {showDropdown ? (
        <div
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          class="origin-top-right absolute right-32 mt-6 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div class="py-1" role="none">
            <button
              class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              
              onClick={() => {history.push("/resume");
              setShowDropdown(false);}}
            >
              About me
            </button>
            <button
              class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              
              onClick={() => {history.push("/education");
              setShowDropdown(false);}}
            >
              Education
            </button>
            <button
              class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => {
                history.push("/skills");
                setShowDropdown(false);}}
            >
              Skills
            </button>
            <button
              class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => {
                history.push("/training");
                setShowDropdown(false);
              }}
            >
              Training
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default NavBar;
