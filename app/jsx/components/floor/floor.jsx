var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({

  pressButton: function(e) {
    e.preventDefault();
    this.props.changeFloor(this.props.level);
  },

  render: function() {
    return (
      <div style={floorStyle}>
        Floor {this.props.level} <br />
        <button onClick={this.pressButton} type="submit" className="icon-arrow-up2"></button><br />
        <button onClick={this.pressButton} type="submit" className="icon-arrow-down2"></button>
      </div>
    )
  }
})

var floorStyle = {
  width: '100%',
  height: 98,
  backgroundColor: 'grey',
  border: 'solid black 1px'
};
