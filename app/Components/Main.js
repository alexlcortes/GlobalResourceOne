var React = require('react');
var ReactDOM = require('react-dom');

// not sure how use these other Components yet
// var Forms = require('./Children/Form');
// var Results = require('./Children/Results');
// var helpers = require('./utils/helpers.js');

// maths for coin flip
var coinFlip = Math.random() < 0.5;

// new main to show if flip is heads or tails while site is built...
var Main = React.createClass({

	render: function () {

		// console.log("Are you out there?")
		var task;
		if (coinFlip == true) {
			task = "An optimist stays up until midnight to see the new year in."
		} else {
			task = "A pessimist stays up to make sure the old year leaves."
		}

		return (

			<div className="container-fluid">

				<nav className="navbar navbar-fixed-top">GR1</nav>

				<div className="row">
					<div className="landingDiv">
						<h1 className="text-center mainTitle">Global Resource One</h1>
						<p className="text-center taskTitle">"{task}"</p>
					</div>
				</div>

				<div className="row">
					<div className="startButtons">
						<button type="button" className="btn signUp">Sign Up</button>
						<button type="button" className="btn signIn">Sign In</button>
					</div>

				</div>

			</div>
		)
	}
});

// export Components not working...
module.exports = Main;