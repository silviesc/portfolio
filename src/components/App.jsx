import Landing from "./Landing";
import '../scss/app.scss';

const App = () => {
  return (
    <>
      <section className="landing-section"><Landing/></section>
      <section>Projects</section>
      <section>About me</section>
      <section>Let's talk</section>
    </>
  )
}
export default App