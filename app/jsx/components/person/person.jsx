var React = require('react');
var ReactDOM = require('react-dom');
var counter = require(__dirname + '/../../lib/counter.js');

module.exports = React.createClass({
  getInitialState: function() {
    return {gender: Math.round(Math.random()), personPositionY: this.props.startingFloor, personPositionX: 100, onElevator: false};
  },

  componentDidMount: function() {
    var timer = setInterval(function() {
        if(this.props.position === this.state.personPositionY) {
          this.moveOntoElevator();
          this.getOffElevator();
          clearInterval(timer);
        }
    }.bind(this), 1000);
  },

  moveOntoElevator: function() {

      counter(this.personStyles().left, 200, 1000, this);

  },

  getOffElevator: function() {
    var timer = setInterval(function() {

      if(this.props.position === this.props.targetFloor * 100 + 100 && this.state.arrived) {
        counter(this.personStyles().left, 100, 1000, this);
        clearInterval(timer);

        setTimeout(function() {
          this.setState({display: 'none'});
        }.bind(this), 1000);
      }
    }.bind(this), 1000);

  },

  personStyles: function() {
    return {
      fontSize: 48,
      height: 100,
      display: this.state.display,
      position: 'relative',
      left: this.state.personPositionX,
      bottom: this.state.onElevator ? this.props.position + 50 : (this.state.personPositionY + 50)
    };
  },

  render: function() {
    return (
      <div style={this.personStyles()}>
        <span className={this.state.gender ? "icon-man" : "icon-woman"}></span>
        {this.state.onElevator ? <p style={text}>Five Please</p> : null}
      </div>
    );
  }
});

var text = {
  fontSize: 12,
  display: 'inline',
  color: 'white'
};


