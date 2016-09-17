var React = require('react');
var Form = require('./Form');
var openWeatherMap = require('openWeatherMap');
var Result = require('./Result');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleSearch: function(location) {
		var _this = this;

		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function(temp){
			_this.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function(err) {
			_this.setState({isLoading: false});
			alert(err);
		});
	},
	render: function() {
		var {isLoading, location, temp} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <label>Fetching weather...</label>
			} else if (location && temp) {
				return <Result location={location} temp={temp} />
			}
		}

		return (
			<div>
				<h2>Get Weather</h2>
				<Form onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;