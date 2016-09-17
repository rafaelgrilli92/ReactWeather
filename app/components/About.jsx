// Stateless Functional Component

var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>
				This is a weather application built using React. I've built this for study as well.
			</p>
			<p>
				<h4>Repository</h4>
				<a target="_blank" href="https://github.com/rafaelgrilli92/ReactWeather">
				https://github.com/rafaelgrilli92/ReactWeather</a>
			</p>
			<p>
				<b>Here are some of tools that I used:</b>
				<ul>
					<li><a target="_blank" href="https://facebook.github.io/react/">React</a></li>
					<li><a target="_blank" href="https://nodejs.org/en/">NodeJS</a></li>
					<li><a target="_blank" href="https://expressjs.com/">Express</a></li>
					<li><a target="_blank" href="https://webpack.github.io/">Webpack</a></li>
					<li><a target="_blank" href="https://babeljs.io/">Babel</a></li>
					<li><a target="_blank" href="https://github.com/mzabriskie/axios">Axios</a></li>
					<li><a target="_blank" href="https://jquery.com/">jQuery</a></li>
					<li><a target="_blank" href="http://foundation.zurb.com/">Foundation</a></li>
					<li><a target="_blank" href="http://openweathermap.org/api">OpenWeatherAPI</a></li>
					<li><a target="_blank" href="https://github.com/">GIT</a></li>
					<li><a target="_blank" href="https://heroku.com">Heroku</a></li>
				</ul>
			</p>
		</div>
	);
};

module.exports = About;