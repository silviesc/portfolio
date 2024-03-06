import Landing from "./Landing";
import '../scss/app.scss';
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <section><Landing/></section>
      <section>Projects</section>
      <section>About me</section>
      <section><Contact/></section>
    </>
  )
}
export default App