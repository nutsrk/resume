import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Training from "./pages/Training";
import Work from "./pages/Work";
function App() {
  return (
    <>
      <div className="w-full h-screen  absolute flex flex-col justify-between px-8">
        <NavBar></NavBar>
        <Footer></Footer>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/training" component={Training} />
          <Route exact path="/work" component={Work} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
