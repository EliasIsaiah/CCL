import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">Welcome</h1>
          <article className="message">
            <div className="message-header">
              <p>Hotdog Enthusiasts Club</p>
            </div>
            <div className="message-body hotdog">🌭</div>
          </article>
        </div>
      </section>
    </>
  );
}

export default App;
