var React = require('react');
var ReactDOM = require('react-dom');
var Floor = require(__dirname + '/floor/floor.jsx');
var Elevator = require(__dirname + '/elevator/elevator.jsx');
var StatsIndicator = require(__dirname + '/stats_indicator/stats_indicator.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {position: 100, currentFloor: 0, upColor: 'black', downColor: 'black', moving: false, backlog: []};
  },

  backlogHandler: function(floor) {

    var backlog = this.state.backlog;
    backlog.push(floor);
    this.setState({backlog: backlog});

    var timer = setInterval(function() {
      console.log('waiting', this.state.backlog);
      if(this.state.moving === false) {
        this.changeFloor(backlog.shift());
        this.setState({backlog: backlog});
        clearInterval(timer);
      }
    }.bind(this), 1000);
  },

  changeFloor: function(newFloor) {

    if(this.state.moving === true) {
      return this.backlogHandler(newFloor);
    }

    var time = (this.state.currentFloor) - (newFloor);
    time = Math.abs(time) * 1000;
    this.counter(this.state.currentFloor * 100 + 100, newFloor * 100 + 100, time);
    this.setState({currentFloor: (newFloor)});
  },

  counter: function(start, end, time) {

    this.setState({moving: true});
    var difference = end - start;
    var timeForEach = time/difference;

    if(timeForEach < 0) {

      timeForEach = timeForEach * -1;
      this.setState({downColor: 'white'});
      var timer = setInterval(function() {
        start--;
        this.setState({position: start});

        if(start <= end) {

          clearInterval(timer);
          this.setState({downColor: 'black'});

          setTimeout(function() {
            this.setState({moving: false});
          }.bind(this), 3000);
        }

      }.bind(this), timeForEach);
    } else {

      this.setState({upColor: 'white'});
      var timer = setInterval(function() {
        start++;
        this.setState({position: start});

        if(start >= end) {

          clearInterval(timer);
          this.setState({upColor: 'black'});

          setTimeout(function() {
            this.setState({moving: false});
          }.bind(this), 3000);
        }

      }.bind(this), timeForEach);
    }

  },

  render: function() {
    return (
      <section>
        <Floor changeFloor={this.changeFloor} level={9} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={8} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={7} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={6} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={5} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={4} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={3} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={2} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={1} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={0} {...this.state} />
        <Elevator {...this.state} />
        <StatsIndicator {...this.state} />
      </section>
    );
  }
})

