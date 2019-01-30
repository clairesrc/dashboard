import React from 'react';
import moment from 'moment';

export default class DateTime extends React.Component {
  constructor(props) {
    super(props);
    const now = moment();
    this.state = {
      date: {
        dayOfWeek: now.format('dddd'),
        day: now.format('Do'),
        month: now.format('MMMM'),
        year: now.format('YYYY')
      },
      time: {
        seconds: now.format('ss'),
        hours: now.format('hh'),
        minutes: now.format('mm'),
        ap: now.format('a')
      }
    };
  }

  tick() {
    const now = moment();
    this.setState(state => ({
      date: {
        dayOfWeek: now.format('dddd'),
        day: now.format('Do'),
        month: now.format('MMMM'),
        year: now.format('YYYY')
      },
      time: {
        seconds: now.format('ss'),
        hours: now.format('hh'),
        minutes: now.format('mm'),
        ap: now.format('a')
      }
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <section className="App-time">
          <p>
            <span className="DateTime-hours">{this.state.time.hours}</span>
            <span className="DateTime-divider">:</span>
            <span className="DateTime-minutes">{this.state.time.minutes}</span>
            <span className="DateTime-divider">:</span>
            <span className="DateTime-seconds">{this.state.time.seconds}</span>
            <span className="DateTime-ap">{this.state.time.ap}</span>
          </p>
        </section>
        <section className="App-date">
          <p>
            <span className="DateTime-dayOfWeek">
              {this.state.date.dayOfWeek}
            </span>
            <span className="DateTime-month">{this.state.date.month}</span>
            <span className="DateTime-day">{this.state.date.day}</span>
            <span className="DateTime-year">{this.state.date.year}</span>
          </p>
        </section>
      </div>
    );
  }
}
