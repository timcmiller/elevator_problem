var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({

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

  render: function() {
    return (
      <div style={this.elevatorStyles()}>
      ^ V
      </div>
    );
  }
});

