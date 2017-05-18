var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var city = this.props.city;
    var message = this.props.message;

    return (
      <div>
        <p>{city} - {message}</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
