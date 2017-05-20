var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className='text-center'>About</h1>
      <p>This is a weather application built in React.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href='https://facebook.github.io/react'>React</a> - This is the
          JavaScript library used.
        </li>
        <li>
          <a href='https://openweathermap.org'>Open Weather Map</a> - This is the
          API used to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
