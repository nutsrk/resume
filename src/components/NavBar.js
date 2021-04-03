import { useHistory } from "react-router";

const NavBar = () => {
  const history = useHistory();
  return (
    <div className="flex flex-row justify-between pt-10 pointer-events-auto">
      <div className="flex font-bold">
        <h1 className="text-yellow-500">Sirirak </h1>
        <h1 className="ml-2">Witoon</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 font-bold">
        <h1
          onClick={() => history.push("/home")}
          className="cursor-pointer hover:underline"
        >
          Home
        </h1>
        <h1
          onClick={() => history.push("/resume")}
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
    </div>
  );
};
export default NavBar;
