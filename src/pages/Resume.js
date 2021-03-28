import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const Resume = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/image/background.png') `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen flex flex-col justify-between px-8"
    >
      <NavBar></NavBar>
      <Footer></Footer>
    </div>
  );
};
export default Resume
