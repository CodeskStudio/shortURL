import React, { Component } from 'react';
import './App.css';


var currentURL = window.location.pathname;

function App() {
  return (
    <div className="App center header">{currentURL}
    </div>
  );
}

// Essential Chrome Extension

if (currentURL === "/ig") {
   window.location.href = 'https://www.instagram.com/codesk.studio'; 
}

if (currentURL === "/chex") {
  window.location.href = 'https://www.instagram.com/p/Cd23LdJLwRl/'; 
}


export default App;
