var React = require('react');

// This is the form component. 
var Initialization = React.createClass({

	// Here we render the function
	render: function(){

		return(
			$('.modal-trigger').openModal()
  		)
  	}
 });


module.exports = Initialization;