import React from 'react';
import axios from 'axios';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      condition: '',
      icon: '#'
    };
    this.tick();
  }

  tick = async function() {
    const weatherData = await axios({
      url: `https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=${
        process.env.REACT_APP_OWM_API_KEY
      }`
    });
    console.log(weatherData);
    this.setState(state => ({
      temp: weatherData.data.main.temp,
      condition: weatherData.data.weather[0].description,
      icon: `http://openweathermap.org/img/w/${
        weatherData.data.weather[0].icon
      }.png`
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 15000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <section className="App-weather">
        <p>
          <img
            className="Weather-icon"
            src={this.state.icon}
            alt={this.state.condition}
          />
          <span className="Weather-condition">{this.state.condition}</span>
          <span className="Weather-temp">
            <span className="Weather-temp-figure">{this.state.temp}</span>&deg;
            F
          </span>
        </p>
      </section>
    );
  }
}
