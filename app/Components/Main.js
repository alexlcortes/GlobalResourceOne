var React = require('react');

// not sure how use these other Components yet
// var Forms = require('./Children/Form');
// var Results = require('./Children/Results');
// var helpers = require('./utils/helpers.js');

// maths for coin flip
var coinFlip = Math.random() < 0.5;

// new main to show if flip is heads or tails while site is built...
var Main = React.createClass({

	render: function () {

		console.log("Are you out there?")
		var task;
		if (coinFlip == true) {
			task = "heads"
		} else {
			task = "tails"
		}

		return (

			<div className="container">

				<div className="row">

					<div className="jumbotron">

						<h1 className="text-center">Global Resource One Comming SOON!</h1>

					</div>

				</div>

			</div>
		)
	}
});

// export Components not working...
module.exports = Main;