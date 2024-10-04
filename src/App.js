import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'; 
import About from './components/About/About';
import Benefits from './components/Benefits/Benefits';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation /> {/* Add Navigation here */}
      </header>
      <main>
        <Home />
        <About />
        <Benefits />
        <Contact />
      </main>
    </div>
  );
}

export default App;
