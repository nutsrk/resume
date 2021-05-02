import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Resume = () => {
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
        <div className="flex pl-28">
          <h1 className="text-7xl" data-cy="about">ABOUT</h1>
          <h1 className="text-7xl pl-5 text-yellow-500"data-cy="me">ME</h1>
        </div>
        <h1 className="text-2xl pl-32">Safety officer from BKK</h1>
        <div className=" flex flex-row mt-16 pl-72 ">
          <img className="w-52 " src="/image/resume.jpg" />
          <div className="flex flex-col pl-5">
            <div>
              <p className="w-4/6 block  ">
                Hello I,m Sirirak Witoon web-developer based on Paris.
                <span className="block">
                  I have rich experience in web site design & building and
                  customization. Also I am good at html, css, bootstrap.
                </span>
              </p>
              <div className="pt-3">
              <a href="https://drive.google.com/file/d/1os8-xI70XGd_n90uaOW7y0zqT7TGOLw8/view?usp=sharing" target="_blank">
              <button className="text-white px-1.5 bg-yellow-500 rounded " type="submit">
                Dowload Resume
              </button>
              </a>
              
              </div>
            </div>
            <div className="flex flex-row pt-10">
              <div className="pr-16 ">
                <InformationLine title="Age" detail="23"></InformationLine>
                <InformationLine
                  title="Religion"
                  detail="Buddhism"
                ></InformationLine>
                <InformationLine
                  title="Phone"
                  detail="092-7725330"
                ></InformationLine>
              </div>
              <div>
                <InformationLine
                  title="Resident"
                  detail="BKK, Thailand"
                ></InformationLine>
                <InformationLine
                  title="Address"
                  detail="Phahon Yothin47, Ladyao, Chatuchak, Bangkok 10900"
                ></InformationLine>
                <InformationLine
                  title="Email"
                  detail="Sirirak.b5963898@gmail.com"
                ></InformationLine>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InformationLine = ({ title, detail }) => {
  return (
    <div className="flex">
      <h1 className="text-yellow-500 pr-3">{title}</h1>
      <h1>{detail}</h1>
    </div>
  );
};

export default Resume;
