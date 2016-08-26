var React = require('react');
var ReactDOM = require('react-dom');

// not sure how use these other Components yet
// var Forms = require('./Children/Form');
// var Results = require('./Children/Results');
// var helpers = require('./utils/helpers.js');
// var Main2 = require('./children/Main2');

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
				<div className="firstSection">

					<nav className="navbar navbar-fixed-top">
						<div className="btn-group">
							<button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">GR1 <span class="caret"></span>
  							</button>
  								<ul class="dropdown-menu">
    								<li><a href="#">Action</a></li>
    								<li><a href="#">Another action</a></li>
    								<li><a href="#">Something else here</a></li>
    							</ul>
    					</div>

					</nav>

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

				<div className="secondSection">
					<div className="row">
						<div className="venderSearch col-md-4">
							<h3 className="text-center">Vender Search</h3>
								<p className="text-center">Vendors or contractors will appear in a clean and well maintained database for clients to find.</p>
						</div>

						<div className="Client Proposal col-md-4">
							<h3 className="text-center">Client Proposal Request</h3>
								<p className="text-center">Clients will post job specific proposals for vendors to search and be able to answer and connect better with clients.</p>
						</div>

						<div className="oneGlobal col-md-4">
							<h3 className="text-center">One Global Database</h3>
								<p className="text-center">Bot vendor and clients will be found in one central global database accessable by creating an account with GR1.</p>
						</div>
					</div>

				</div>
			</div>
		)
	}
});

// export Components not working...
module.exports = Main;