import "./App.scss";
import Heading from "./components/Heading/Heading";
import About from "./components/About/About";

function App() {
  return (
    <>
      <nav className="app">
        <Heading />;
        <About />
      </nav>
      ;
    </>
  );
}

export default App;
