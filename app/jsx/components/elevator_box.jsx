var React = require('react');
var ReactDOM = require('react-dom');
var Floor = require(__dirname + '/floor/floor.jsx');
var Elevator = require(__dirname + '/elevator/elevator.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {position: 100, currentFloor: 0, upColor: 'black', downColor: 'black'};
  },

  changeFloor: function(newFloor) {
    var time = (this.state.currentFloor) - (newFloor);
    time = Math.abs(time) * 1000;
    this.counter(this.state.currentFloor * 100 + 100, newFloor * 100 + 100, time);
    this.setState({currentFloor: (newFloor)});
  },

  counter: function(start, end, time) {
    var difference = end - start;
    var timeForEach = time/difference;

    if(timeForEach < 0) {

      timeForEach = timeForEach * -1;
      this.setState({downColor: 'white'});
      var timer = setInterval(function() {
        start--;
        this.setState({position: start});
        if(start <= end) {
          clearInterval(timer)
          this.setState({downColor: 'black'})
        };
      }.bind(this), timeForEach);
    } else {

      this.setState({upColor: 'white'});
      var timer = setInterval(function() {
        start++;
        this.setState({position: start});
        if(start >= end) {
          this.setState({upColor: 'black'});
          clearInterval(timer);
        }
      }.bind(this), timeForEach);
    }

  },

  render: function() {
    return (
      <section>
        <Floor changeFloor={this.changeFloor} level={9} />
        <Floor changeFloor={this.changeFloor} level={8} />
        <Floor changeFloor={this.changeFloor} level={7} />
        <Floor changeFloor={this.changeFloor} level={6} />
        <Floor changeFloor={this.changeFloor} level={5} />
        <Floor changeFloor={this.changeFloor} level={4} />
        <Floor changeFloor={this.changeFloor} level={3} />
        <Floor changeFloor={this.changeFloor} level={2} />
        <Floor changeFloor={this.changeFloor} level={1} />
        <Floor changeFloor={this.changeFloor} level={0} />
        <Elevator {...this.state} />
      </section>
    );
  }
})

