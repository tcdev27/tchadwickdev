import React from 'react';
import './styles.css';
import Image from '../public/img/mechanic.png';

export default function App() {
  return (
    <div className="App">
      <h1>www.tchadwickdev.co.uk</h1>
      <img
        style={{ height: 300, width: 300, marginTop: 150 }}
        src={Image}
        alt="Coming soon"
      />
      <p>Let's play a game</p>
    </div>
  );
}
