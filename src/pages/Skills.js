const Skills = () => {
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
          <div className="pl-56">
              <div className="flex flex-row">
              <div>
            <h1 className="text-4xl .tracking-wide">Personal</h1>
            <h1 className="text-5xl pl-32 text-yellow-500 font-medium">
              Skills
            </h1>
            <h1 className="pt-3.5">Communication</h1>
            <div className="flex pt-1.5">
              <div className="w-44 h-2 bg-yellow-500"></div>
              <div className="w-12 h-2 bg-gray-300"></div>
            </div>
            <h1 className="pt-3.5">Teamwork</h1>
            <div className="flex pt-1.5">
              <div className="w-48 h-2 bg-yellow-500"></div>
              <div className="w-8 h-2 bg-gray-300"></div>
            </div>
            <h1 className="pt-3.5">Enthusiastic</h1>
            <div className="flex pt-1.5">
              <div className="w-52 h-2 bg-yellow-500"></div>
              <div className="h-2 bg-gray-300"></div>
            </div>
            <h1 className="pt-3.5">Interpersonal</h1>
            <div className="flex pt-1.5">
              <div className="w-44 h-2 bg-yellow-500"></div>
              <div className="w-12 h-2 bg-gray-300"></div>
            </div>
            </div>
            <div className="pl-40">
              <h1 className="text-4xl .tracking-wide">Professtional</h1>
              <h1 className="text-5xl pl-32 text-yellow-500 font-medium">
                Skills
              </h1>
              <h1 className="pt-3.5">CSS</h1>
              <div className="flex pt-1.5">
                <div className="w-44 h-2 bg-yellow-500"></div>
                <div className="w-12 h-2 bg-gray-300"></div>
              </div>
              <h1 className="pt-3.5">Javascrip</h1>
              <div className="flex pt-1.5">
                <div className="w-48 h-2 bg-yellow-500"></div>
                <div className="w-8 h-2 bg-gray-300"></div>
              </div>
              <h1 className="pt-3.5">HTML</h1>
              <div className="flex pt-1.5">
                <div className="w-52 h-2 bg-yellow-500"></div>
                <div className="h-2 bg-gray-300"></div>
              </div>
              <h1 className="pt-3.5">Python</h1>
              <div className="flex pt-1.5">
                <div className="w-44 h-2 bg-yellow-500"></div>
                <div className="w-12 h-2 bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Skills;
