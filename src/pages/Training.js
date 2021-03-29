const Training = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/image/background_resume.png') `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen px-8"
    >
      <div>
        <div className="self-center pt-40">
          <div className="pl-28">
            <h1 className="text-7xl .tracking-wide ">Training</h1>
            <h1 className="text-2xl pl-44 text-yellow-500 font-medium">
              Information
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="pl-44">
              <Train
                title="ISO 9001:2015 , ISO 14001:2015 and ISO 45001:2018"
                institution="Success Safety Development Center Co,. Ltd."
              ></Train>
              <Train
                title=" Basic Fire Prevention and Safety"
                institution="Nippon Chemical Co,. Ltd"
              ></Train>
            </div>
            <div className="pl-20">
              <Train
                title="Inspection and Testing of Water-Based Fire Protection System"
                institution="Nano Fire and Safety Engineering Co,. Ltd"
              ></Train>
              <Train
                title="Design Thinking"
                institution="Suranaree University of Technology"
              ></Train>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Training;
const Train = ({ title, institution }) => {
  return (
    <div className="pt-16 ">
      <div className="w-auto h-24 bg-gray-100 shadow-2xl">
          <div className="py-4 px-4">
        <h1 className="text-yellow-500 text-lg font-bold">{title}</h1>
        <h1 className="pt-3.5 ">{institution}</h1>
      </div>
      </div>
    </div>
  );
};
