import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
const Home = () => {
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
      <div>
        <NavBar></NavBar>
        <div className="pl-16 mt-40 text-7xl flex ">
          <h1>I love </h1>
          <h1 className="text-yellow-500 ml-4">myself</h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
