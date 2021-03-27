import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url('/image/background_nut.jpg') `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className="h-screen flex flex-col justify-between px-8"
    >
      <div>
        <div className="flex flex-row justify-between pt-10 ">
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
        <div className="pl-16 mt-40 text-7xl flex ">
          <h1>I love </h1>
          <h1 className="text-yellow-500 ml-4">myself</h1>
        </div>
      </div>
      <div className="pb-10 flex flex-row justify-between">
        <div className="flex">
          <h1 className="font-bold">Email </h1>
          <h1 className="ml-2">Sirirak.b5963898@gmail.com</h1>
        </div>
        <div className="flex">
          <h1 className=""> I'm</h1>
          <h1 className="text-yellow-500 mx-2">Sirirak</h1>
          <h1 className="">Witoon</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
