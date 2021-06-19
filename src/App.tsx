import React from 'react';
import logo from './logo.svg';
import './App.css';
import Childthree from './childthree/childthree';

function App() {
  return (
    <div className="App">
      <div className="childone">Michael's Website</div>
      <div className="childtwo">
        <Childthree />
        <div className="childfour">fourth child</div>
        <div className="childfive">fifth child</div>
      </div>
    </div>
  );
}

export default App;
