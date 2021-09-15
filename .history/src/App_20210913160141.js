import "./App.css";
import {
  Navbar,
  MainContent,
  VideoSection,
  Features,
  Technology,
} from "./components/component-path";

function App() {
  return (
    <div className="App">
      <div
        className="app-main"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(213, 32, 71, 0.8) 0%, rgba(238, 61, 27, 0.8) 100%),url(/images/bg.png)",
          height: "782px",
        }}
      >
        <Navbar />
        <MainContent />
      </div>
      <VideoSection />
      <Features />
      <Technology />
    </div>
  );
}

export default App;
