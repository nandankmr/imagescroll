import React from "react";

import "./App.css";
import Images from "./Images";

function App() {
  return (
    <div id="root">
      <div className="hero is-fullheight is-bold is-info">
        <div className="hero-body">
          <div className="container">
            <div className="header content">
              <h2 className="subtitle is-6">Keep Scrolling</h2>
              <h1 className="title is-1">
                Infinite Image Scroll
              </h1>
            </div>
            <Images />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
