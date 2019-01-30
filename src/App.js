import React from 'react';
import './App.css';
import './Countdown.css';
import './DateTime.css';
import DateTime from './components/DateTime';
import Weather from './components/Weather';
import Countdown from './components/countdown/Countdown';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hi <span>Meadow</span>
          </p>
        </header>
        <div className="App-grid">
          <Weather />
          <DateTime />
          <Countdown />>
        </div>
      </div>
    );
  }
}

export default App;
