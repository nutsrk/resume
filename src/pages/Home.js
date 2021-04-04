import react, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
const Home = () => {
  const [Ilove, setIlove] = useState("I love");
  const [Myself, setMyself] = useState("myself");
  useEffect(()=>{
   typingText()
  },[])
  const typingText = () => {
    setTimeout(() => {
      setIlove("");
      setMyself("");
    }, 1000);
    setTimeout(() => {
      setIlove("I");
    }, 1500);
    setTimeout(() => {
      setIlove("I l");
    }, 2000);
    setTimeout(() => {
      setIlove("I lo");
    }, 2500);
    setTimeout(() => {
      setIlove("I lov");
    }, 3000);
    setTimeout(() => {
      setIlove("I love");
    }, 3500);
    setTimeout(() => {
      setMyself(" m");
    }, 4000);
    setTimeout(() => {
      setMyself(" my");
    }, 4500);
    setTimeout(() => {
      setMyself(" mys");
    }, 5000);
    setTimeout(() => {
      setMyself(" myse");
    }, 5500);
    setTimeout(() => {
      setMyself(" mysel");
    }, 6000);
    setTimeout(() => {
      setMyself(" myself");
    }, 6500);
    setTimeout(()=>{
     typingText()
    },6800)
  };

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
        <div className="pl-16 mt-40 text-7xl flex ">
          <h1>{Ilove}</h1>
          <h1 className="text-yellow-500 ml-4">{Myself}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
