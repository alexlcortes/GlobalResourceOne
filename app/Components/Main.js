var React = require('react');
var ReactDOM = require('react-dom');

var Info = require('./Children/Info');

// maths for coin flip
var coinFlip = Math.random() < 0.5;

// new main to show if flip is heads or tails while site is built...
var Main = React.createClass({

	componentDidMount: function () {

		$(document).ready(function(){  
			console.log("Test");     
			var scroll_start = 0;
			var startchange = $('.secondSection');
			var offset = startchange.offset();
			
			if (startchange.length){
					$(document).scroll(function() { 
  					scroll_start = $(this).scrollTop();

     			if(scroll_start > offset.top) {
          				$('.nav-item').css('color', '#000000');
      				} else {
          				$('.nav-item').css('color', '#F2F2F2');
       				}
				});
			}
		});
	},

	render: function () {

		// console.log("Are you out there?")
		var task;
		if (coinFlip == true) {
			task = "An optimist stays up until midnight to see the new year in."
		} else {
			task = "A pessimist stays up to make sure the old year leaves."
		}

		return (

			<div className="container-fluid2">

				<div className="firstBack">

					<nav className="navbar navbar-fixed-top" role="navigation">
						<ul className="nav">
							<li className="nav-item">GR1</li>
							<li className="nav-item">Search</li>
							<li className="nav-item">Proposal</li>
							<li className="nav-item">Profile</li>
						</ul>
					</nav>

					<div className="row">
						<div className="landingDiv">
							<h1 className="text-xs-center mainTitle">Global Resource One</h1>
							<p className="text-xs-center taskTitle">"{task}"</p>
						</div>
					</div>

					<div className="row">
						<div className="startButtons">
							<button type="button" className="btn signUp">Sign Up</button>
							<button type="button" className="btn signIn">Sign In</button>
						</div>
					</div>

				</div>

					<div className="info">
						<Info />
					</div>

			</div>


		)
	}
});

module.exports = Main;