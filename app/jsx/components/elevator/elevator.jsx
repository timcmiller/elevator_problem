var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({

  render: function() {
    return (
      <div style={elevatorStyles}>
      ^ V
      </div>)
  }
})

var elevatorStyles = {
  backgroundColor: 'red',
  height: 100,
  width: 100,
  position: 'fixed',
  top: -100
};
