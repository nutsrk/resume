const Work = () => {
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
          <div className="pl-28 divide-y divide-gray-400 w-10">
            <h1 className="text-7xl .tracking-wide">Work</h1>
            <h1 className="text-2xl pl-40 text-yellow-500 font-medium">
              Experience
            </h1>
          </div>
          <div className="flex pl-28 pt-8 font-semibold text-2xl">
            <h1>Internship</h1>
            <h1 className="text-yellow-500 pl-2 ">(Safety Officer)</h1>
          </div>
          <div className="flex flex-row ">
          <div className="pl-28 pt-3.5">
            <h1>Fujikura Automotive (Thailand) Ltd.</h1>
            <h1 className="text-yellow-500">Nov 2019 to Feb 2020</h1>
          </div>
          <div className="pl-72 space-y-3 text-xl">
            <h1>Responsibility :</h1>
            <ul className="list-disc">
              <li>Training on Safety courses.</li>
              <li>Risk assessment & Identify hazards.</li>
              <li>Safety Patrol.</li>
              <li>Checking for a work permit.</li>
              <li>Inspection of fire prevention equipment.</li>
              <li>Create a Safety project.</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
