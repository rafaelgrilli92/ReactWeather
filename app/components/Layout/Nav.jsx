var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
	return (
		<div className="top-bar">
		  <div className="top-bar-left">
		    <ul className="dropdown menu" data-dropdown-menu>
		      <li className="menu-text">React Weather</li>
		        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
				<li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
				<li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
		    </ul>
		  </div>
		   <div class="top-bar-right">
		   </div>
		</div>
	);
}

module.exports = Nav;