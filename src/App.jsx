import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <p></p>
      <div className="flex flex-col md:flex-row min-h-screen w-full subpixel-antialiased">
        <HeaderLeft/>
        <main className="flex-[3] pt-20 md:pt-0">
          <Home/>
          <Experience/>
          <Projects/>
          <Contact/>
        </main>
      </div>
    </>
  );
}

export default App;