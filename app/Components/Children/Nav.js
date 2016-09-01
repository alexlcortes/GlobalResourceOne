var React = require('react');
var ReactDOM = require('react-dom');

var Nav = React.createClass({

		render: function () {

			return (

				$(document).ready(function(){       
   					var scroll_start = 0;
   					var startchange = $('#startchange');
   					var offset = startchange.offset();
    				
	    			if (startchange.length){
	   					$(document).scroll(function() { 
	      					scroll_start = $(this).scrollTop();
     
		     			if(scroll_start > offset.top) {
		          				$('.navbar').css('background-color', '#000000');
		      				} else {
		          				$('.navbar').css('background-color', 'transparent');
		       				}
   						});
    				}
				});
			)
		}
});

module