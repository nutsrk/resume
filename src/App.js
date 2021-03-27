import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="">
      <div className="flex flex-row justify-between px-8 pt-10 ">
        <div className="flex font-bold">
          <h1 className="text-yellow-500">Sirirak </h1>
          <h1 className="ml-2">Witoon</h1>
        </div>
        <div className="grid grid-cols-4 gap-4 font-bold">
          <h1>Home</h1>
          <h1>Resume</h1>
          <h1>Works</h1>
          <h1>Contacts</h1>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
