import React, { useState } from "react";
import { ethers } from "ethers";
import "./App.css";

export default function App() {
  const [msg, setMsg] = useState("");
  const ping = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">👋 Hey there!</div>

        <div className="bio">
          I am Prathviraj.Connect your Ethereum wallet and ping me!
        </div>
        <input
          type="text"
          placeholder="hey"
          className="messageBox"
          onChange={(e) => {
            setMsg(e.target.value);
          }}
        />
        <button className="waveButton" onClick={ping}>
          ping
        </button>
      </div>
    </div>
  );
}
