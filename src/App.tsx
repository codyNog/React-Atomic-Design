import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import Media from "./store/mediaContainer";

const AppContent: React.FC = () => {
  const media = Media.useContainer();
  const { onChangeWidth, initWidth } = media;

  useEffect(() => {
    initWidth();
    window.addEventListener("resize", onChangeWidth);
  });

  return (
    <div>
      <HomePage />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Media.Provider>
      <AppContent />
    </Media.Provider>
  );
};

export default App;
