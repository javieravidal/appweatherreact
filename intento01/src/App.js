import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        </div>
        <footer className="footer">
          This project was coded by{" "}
          <a
            href="https://www.javieravidal.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Javiera Vidal
          </a> 
          {" "}and is{" "} 
          <a
            href="https://github.com/javieravidal/RWAReactWeatherApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}open-sourced on GitHub 
          </a> &#32;and &#32;
          <a
            href="https://aquamarine-druid-f7eedd.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}hosted on Netlify
          </a>
        </footer>
      
    </div>
  );
}
