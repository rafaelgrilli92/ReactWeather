var React = require('react');

var Result = ({location, temp}) => {
	return (
		<h5 className="text-center">It's <strong>{temp}°C</strong> in {location}.</h5>
	);
}

module.exports = Result;