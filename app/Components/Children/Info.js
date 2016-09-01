var React = require('react');
var ReactDOM = require('react-dom');

var Info = React.createClass({

	render: function () {

		return (

			<div className="secondSection">
				<div className="row">
					<div className="venderSearch col-md-4">
						<h5 className="text-xs-center infoTitle">Vender Search</h5>
							<p className="text-xs-center infoContent">Vendors or contractors will appear in a clean and well maintained database for clients to find.</p>
					</div>


					<div className="clientProposal col-md-4">
						<h5 className="text-xs-center infoTitle">Client Proposal Request</h5>
							<p className="text-xs-center infoContent">Clients will post job specific proposals for vendors to search and be able to answer and connect better with clients.</p>
					</div>

					<div className="oneGlobal col-md-4">
						<h5 className="text-xs-center infoTitle">One Global Database</h5>
							<p className="text-xs-center infoContent">Bot vendor and clients will be found in one central global database accessable by creating an account with GR1.</p>
					</div>
				</div>
			</div>

		)
	}
});

module.exports = Info;