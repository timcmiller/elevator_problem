var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({

  render: function() {
    return (
      <div style={statStyles}>
        <span>Up Next: {this.props.currentFloor}</span>
        <br />
        <span>Backlog:  {this.props.backlog.join(', ')}</span>
      </div>
      )
  }
})

var statStyles = {
  position: 'fixed',
  top: 0,
  right: 10,
  backgroundColor: '#F5F5DC'
};
