import "../scss/landing.scss";
import Navbar from "./Navbar";
import video from "../images/background.mp4";

const Landing = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <div className="video-background">
          <video autoPlay muted loop className="video">
            <source src={video} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
      </header>
    </>
  );
};

export default Landing;
