/**
 * 
 */
$(document).ready(function(){
	$('#adminContainer').hide();
	$('#createUser').hide();

	$('#tobias').submit(function(){
		event.preventDefault();
		$('#LoginContainer').hide();
		$('#adminContainer').show();

	})
	
	$('#createNewUser').click(function(){
		event.preventDefault();
		$('#adminContainer').hide();
		$('#createUser').show();
	})
	
	$('#confirmCreateUser').submit(function(){
		event.preventDefault();
		$('#adminContainer').show();
		$('#createUser').hide();
	})
	
	$('#cancel').click(function(){
		event.preventDefault();
		$('#adminContainer').show();
		$('#createUser').hide();
	})

	
})

