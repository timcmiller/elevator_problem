var React = require('react');
var ReactDOM = require('react-dom');
var Floor = require(__dirname + '/floor/floor.jsx');
var Elevator = require(__dirname + '/elevator/elevator.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {position: 100, currentFloor: 0};
  },

  changeFloor: function(newFloor) {
    var time = (this.state.currentFloor + 1 * 100) - (newFloor + 1 * 100);
    time = Math.abs(time);
    this.counter(this.state.currentFloor * 100 + 100, newFloor * 100 + 100, time);
    this.setState({currentFloor: (newFloor + 1)});
  },

  counter: function(start, end, time) {
    var difference = end - start;
    var timeForEach = time/difference;

    if(timeForEach < 0) {

      timeForEach = timeForEach * -1;
      var timer = setInterval(function() {
        start--;
        this.setState({position: start});
        if(start === end) clearInterval(timer);
      }.bind(this), timeForEach);
    } else {

      var timer = setInterval(function() {
        start++;
        this.setState({position: start});
        if(start === end) clearInterval(timer);
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
        <Elevator position={this.state.position} />
      </section>
    );
  }
})

