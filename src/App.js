import "./App.css";
import {
  Navbar,
  MainContent,
  VideoSection,
  Features,
  Technology,
  AppDownload,
  Contact,
  Footer,
} from "./components/component-path";
import { useState } from "react";

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

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
        <Navbar
          language={language}
          handleSetLanguage={(language) => {
            setLanguage(language);
            storeLanguageInLocalStorage(language);
          }}
        />
        <MainContent />
      </div>
      <VideoSection language={language} />
      <Features />
      <Technology />
      <AppDownload />
      <Contact />
      <Footer />
    </div>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
