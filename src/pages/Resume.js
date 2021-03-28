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
      className="h-screen flex flex-col justify-between px-8"
    >
      <NavBar></NavBar>
      <div className="w-full h-full flex flex-col bg-red-100">
        <div className="flex pt-16 pl-32">
          <h1 className="text-7xl">ABOUT</h1>
          <h1 className="text-7xl pl-5 text-yellow-500">ME</h1>
        </div>
        <h1 className="text-2xl pl-32">Safety officer from BKK</h1>
        <div className="self-center flex flex-row">
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
              <div className="w-36 h-6 bg-yellow-500">
                <h1 className="text-white text-center"> Dowload Resume</h1>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="pr-16">
                <div className="flex">
                  <h1 className="text-yellow-500 pr-3">Age</h1>
                  <h1>23</h1>
                </div>
                <div className="flex">
                  <h1 className="text-yellow-500 pr-3">Religion</h1>
                  <h1>Buddhism</h1>
                </div>
                <div className="flex">
                  <h1 className="text-yellow-500 pr-3">Pnone</h1>
                  <h1>092-7725330</h1>
                </div>
              </div>
              <div>
                <div className="flex">
                  <h1 className="text-yellow-500 pr-3">Resident </h1>
                  <h1>BKK,Thailand</h1>
                </div>
                <div className="flex">
                  <h1 className="text-yellow-500 pr-3">Address </h1>
                  <h1>Phahon Yothin47, Ladyao, Chatuchak, Bangkok 10900</h1>
                </div>
                <div className="flex">
                  <h1 className="text-yellow-500 pr-3">Email </h1>
                  <h1>Sirirak.b5963898@gmail.com</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Resume;
