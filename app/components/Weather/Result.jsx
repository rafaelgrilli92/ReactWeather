var React = require('react');

var Result = ({location, temp}) => {
	return (
		<label>It's {temp} in {location}.</label>
	);
}

module.exports = Result;