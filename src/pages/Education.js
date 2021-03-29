const Education = () => {
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
      <div className="self-center pt-40">
        <div className="pl-28 divide-y divide-gray-400 w-10">
          <h1 className="text-7xl ">Education</h1>
          <h1 className="text-2xl pl-44 text-yellow-500 font-medium">
            background
          </h1>
        </div>
      </div>
      
      <div className="flex flex-row ">
        <EducationInfor
          name="Occupational Health and Safety"
          year="2016"
          university="Suranaree University of Technology"
          gpa="3.55"
        ></EducationInfor>
        <div>
          <EducationInfor2
            name="Occupational Health and Safety"
            year="2020"
            university="Suranaree University of Technology"
            gpa="3.55"
          ></EducationInfor2>
          <EducationInfor2
            name="Occupational Health and Safety"
            year="2013"
            university="Suranaree University of Technology"
            gpa="3.55"
          ></EducationInfor2>
        </div>
      </div>
    </div>
    
  );
};
export default Education;

const EducationInfor = ({ name, year, university, gpa }) => {
  return (
    <div className="pl-28 pt-24">
      <div className="flex font-bold">
        <h1 className="pt-3.5 text-xl">{name}</h1>
        <h1 className="pl-12 text-yellow-500 text-4xl">{year}</h1>
      </div>
      <h1 className="pt-2 font-normal">{university}</h1>
      <h1 className="text-yellow-500 pt-2 font-medium">{gpa}</h1>
    </div>
  );
};
const EducationInfor2 = ({ name, year, university, gpa }) => {
  return (
    <div className="pl-28 pt-24">
      <div className="flex font-bold">
        <h1 className=" text-yellow-500 text-4xl">{year}</h1>
        <h1 className="pt-3.5 pl-14 text-xl ">{name}</h1>
      </div>
      <div className="pl-36">
      <h1 className="pt-2 font-normal">{university}</h1>
      <h1 className="text-yellow-500 pt-2 font-medium">{gpa}</h1>
      </div>
    </div>
  );
};
