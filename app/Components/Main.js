var React = require('react');
var ReactDOM = require('react-dom');

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

				<div className="secondSection">

					<div className="row">
						<div className="venderSearch col s4">
							<h5 className="center-align">Vender Search</h5>
								<p className="center-align">Vendors or contractors will appear in a clean and well maintained database for clients to find.</p>
						</div>

						<div className="clientProposal col s4">
							<h5 className="center-align">Client Proposal Request</h5>
								<p className="center-align">Clients will post job specific proposals for vendors to search and be able to answer and connect better with clients.</p>
						</div>

						<div className="oneGlobal col s4">
							<h5 className="text-center">One Global Database</h5>
								<p className="text-center">Bot vendor and clients will be found in one central global database accessable by creating an account with GR1.</p>
						</div>
					</div>

				</div>

			</div>
		)
	}
});

module.exports = Main;