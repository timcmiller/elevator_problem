var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({

  render: function() {
    return (
      <div style={floorStyle}>
        {this.props.level}
      </div>
    )
  }
})

var floorStyle = {
  width: '100%',
  height: 100,
  backgroundColor: 'grey',
  border: 'solid black 1px'
};
