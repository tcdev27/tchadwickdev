import React from 'react';
import './styles.css';

export default function App() {
  return (
    <div className="App" data-test="foo">
      <h1>www.tchadwickdev.co.uk</h1>
      <img
        style={{ height: 300, width: 300, marginTop: 150 }}
        src="/img/mechanic.png"
        alt="Coming soon"
      />
    </div>
  );
}
