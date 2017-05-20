var React = require('react');

var WeatherMessage = ({temp, location}) => {
  // var {location, temp} = props;

  return (
    <div>
      <h3 className='text-center'>It is {temp} degrees in {location}</h3>
    </div>
  )
};

module.exports = WeatherMessage;
