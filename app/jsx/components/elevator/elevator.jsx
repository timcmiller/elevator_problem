var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  upStyle: function() {
    return {
      color: this.props.upColor
    };
  },

  downStyle: function() {
    return {
      color: this.props.downColor
    };
  },

  elevatorStyles: function() {
    return {
      backgroundColor: 'red',
      height: 100,
      width: 100,
      position: 'relative',
      left: 200,
      bottom: this.props.position
    };
  },

  changingFloor: function() {
    return Math.round(this.props.position/100) - 1;
  },

  render: function() {
    return (
      <div style={this.elevatorStyles()}>
      <span style={this.upStyle()} className="icon-circle-up"></span> <span style={this.downStyle()} className="icon-circle-down"></span>{this.changingFloor()} {this.props.currentFloor}
      </div>
    );
  }
});

