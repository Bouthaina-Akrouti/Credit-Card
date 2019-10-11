import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <header className="head"><h1>Credit Card</h1></header>
        <img className="logo-puce" src="Images/card.png" />
      </div>
      <div>
        <div>
          <p className="num-card" ><strong>7253 3256 7895 1245</strong></p>
          <div className="card">
            <div className="code">
              <p><strong>5422</strong></p>
              <p><strong>CARDHOLDER</strong></p>
            </div>
            <div className="date">
              <div>
                <p><strong>VALID THRU</strong></p>
              </div>
              <div>
                <p><strong>MONTH/YEAR</strong></p>
                <p><strong>11/50</strong></p>
              </div>
            </div>
            <div>
              <img className="master" src="https://s.olj.me/storage/attachments/753/752372_60693905214_645561.jpg/r/800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
