var React = require('react');
var ReactDOM = require('react-dom');
var Floor = require(__dirname + '/floor/floor.jsx');
var Elevator = require(__dirname + '/elevator/elevator.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <section>
        <Floor level={'Floor 9'} />
        <Floor level={'Floor 8'} />
        <Floor level={'Floor 7'} />
        <Floor level={'Floor 6'} />
        <Floor level={'Floor 5'} />
        <Floor level={'Floor 4'} />
        <Floor level={'Floor 3'} />
        <Floor level={'Floor 2'} />
        <Floor level={'Floor 1'} />
        <Floor level={'Ground Floor'} />
        <Elevator />
      </section>
    );
  }
})

