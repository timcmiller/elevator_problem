module.exports = function(start, end, time, state) {

  state.setState({arrived: false});
  var difference = end - start;
  var timeForEach = time/difference;

  if(timeForEach < 0) {

    timeForEach = timeForEach * -1;
    state.setState({downColor: 'white'});
    var timer = setInterval(function() {
      start--;
      state.setState({position: start, personPositionX: start});

      if(start <= end) {

        clearInterval(timer);
        state.setState({downColor: 'black'});

        setTimeout(function() {
          state.setState({onElevator: !state.state.onElevator, arrived: true});
        }.bind(this), 1000);

        setTimeout(function() {
          state.setState({moving: false});
        }.bind(this), 3000);
      }

    }.bind(this), timeForEach);
  } else {

    state.setState({upColor: 'white'});
    var timer = setInterval(function() {
      start++;
      state.setState({position: start, personPositionX: start});

      if(start >= end) {

        clearInterval(timer);

        state.setState({upColor: 'black'});
        setTimeout(function() {
          state.setState({onElevator: !state.state.onElevator, arrived: true});
        }.bind(this), 1000);
        setTimeout(function() {
          state.setState({moving: false});
        }.bind(this), 3000);
      }

    }.bind(this), timeForEach);
  }
};
