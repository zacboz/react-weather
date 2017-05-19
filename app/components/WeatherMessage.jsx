var React = require('react');

var WeatherMessage = ({temp, location}) => {
  // var {location, temp} = props;

  return (
    <div>
      <p>It is {temp} degrees in {location}</p>
    </div>
  )
};

module.exports = WeatherMessage;
