var React = require('react');
var ReactDOM = require('react-dom');
var Floor = require(__dirname + '/floor/floor.jsx');
var EndFloor = require(__dirname +'/end_floor/end_floor.jsx');
var Elevator = require(__dirname + '/elevator/elevator.jsx');
var StatsIndicator = require(__dirname + '/stats_indicator/stats_indicator.jsx');
var ElevatorPanel = require(__dirname + '/elevator_panel/elevator_panel.jsx');
var Person = require(__dirname + '/person/person.jsx');
var counter = require(__dirname + '/../lib/counter.js');

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
    counter(this.state.currentFloor * 100 + 100, newFloor * 100 + 100, time, this);
    this.setState({currentFloor: (newFloor), moving: true});
  },

  render: function() {
    return (
      <section>
        <EndFloor changeFloor={this.changeFloor} level={9} {...this.state} button={'icon-arrow-down2'} />
        <Floor changeFloor={this.changeFloor} level={8} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={7} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={6} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={5} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={4} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={3} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={2} {...this.state} />
        <Floor changeFloor={this.changeFloor} level={1} {...this.state} />
        <EndFloor changeFloor={this.changeFloor} level={0} {...this.state} button={'icon-arrow-up2'} />
        <Elevator {...this.state} />
        <StatsIndicator {...this.state} />
        <ElevatorPanel {...this.state} changeFloor={this.changeFloor} />
        <Person {...this.state} counter={this.counter} />
      </section>
    );
  }
})

