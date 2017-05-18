var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getDefaultProps: function() {
    return {
      city: 'Gilroy',
      message: 'Smells like garlic!1'
    };
  },
  getInitialState: function() {
    return {
      city: this.props.city,
      message: this.props.message
    };
  },
  handleNewCity: function(updates) {
    this.setState(updates);
  },
  render: function () {
    var city = this.state.city;
    var message = this.state.message;

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onNewCity={this.handleNewCity} />
        <WeatherMessage city={city} message={message} />
      </div>
    );
  }
});

module.exports = Weather;
