import React from 'react';
import moment from 'moment';
import CountdownItems from './CountdownItems';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    const now = moment();
    const items = CountdownItems.map(this.calculateItem);
    this.state = {
      now,
      items
    };
  }
  tick() {
    const now = moment();
    const items = CountdownItems.map(this.calculateItem);
    this.setState(state => ({
      now,
      items
    }));
  }

  calculateItem(item) {
    const now = moment();
    const coefficient =
      moment(`${item.date}/${now.format('YYYY')}`, 'MM/DD/YYYY').unix() /
      now.unix();
    item.percent = parseInt((coefficient - 1) * 1000);
    console.log(item);
    return item;
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 86400);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const listItems = this.state.items
      .filter(item => item.percent > 0)
      .map((item, index) => (
        <li key={index}>
          <span className="App-countdown-title">{item.title}</span>
          <span className="App-countdown-date">{item.date}</span>
          <div className="App-countdown-percent">
            <div
              className="App-countdown-percent-figure"
              style={{ width: `${item.percent}%` }}
            />
          </div>
        </li>
      ));
    return (
      <section className="App-countdown">
        <div>
          <ul>{listItems}</ul>
        </div>
      </section>
    );
  }
}
