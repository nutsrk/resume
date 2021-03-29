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
          <div className="pl-28">
            <h1 className="text-4xl ">Personal</h1>
            <h1 className="text-5xl pl-32 text-yellow-500 font-medium">
              Skills
            </h1>
            <h1 className="pt-3.5">Communication</h1>
            <h1 className="pt-3.5">Teamwork</h1>
            <h1 className="pt-3.5">Enthusiastic</h1>
            <h1 className="pt-3.5">Interpersonal</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
