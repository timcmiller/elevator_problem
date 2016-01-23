var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  pressButton: function(e) {
    e.preventDefault();
    this.props.changeFloor(e.target.innerHTML);
  },

  render: function() {
    return (
      <div style={panelStyles}>
        <button onClick={this.pressButton} type="submit">0</button>
        <button onClick={this.pressButton} type="submit">1</button>
        <button onClick={this.pressButton} type="submit">2</button>
        <br />
        <button onClick={this.pressButton} type="submit">3</button>
        <button onClick={this.pressButton} type="submit">4</button>
        <button onClick={this.pressButton} type="submit">5</button>
        <br />
        <button onClick={this.pressButton} type="submit">6</button>
        <button onClick={this.pressButton} type="submit">7</button>
        <button onClick={this.pressButton} type="submit">8</button>
        <br />
        <button onClick={this.pressButton} type="submit">9</button>
      </div>
    );
  }
})

var panelStyles = {
  position: 'fixed',
  bottom: 0,
  right: 10,
  backgroundColor: '#F5F5DC'
}
