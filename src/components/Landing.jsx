import "../scss/landing.scss";
import Header from "./Header";
import Hero from "./Hero";
import Scroll from "./Scroll";
import video from "../images/background.mp4";

const Landing = () => {
  return (
    <>
      <Header />
      <div className="landing">
        <video className="video-background" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <Hero />
        <Scroll />
      </div>
    </>
  );
};

export default Landing;

