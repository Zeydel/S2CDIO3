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
	<script>	function form_validate(){
		//alert("function is there");
		var e = 0;
		if(isEmpty("username", "Please type in your username", "err_username_msg"))
		{
			//alert("1");
			e++;
		}
		if(isEmpty("psw", "Please type in your password", "err_password_msg"))
		{
			//alert("2");
			e++;
		}
		if(isEmpty("psw-repeat", "Please confirm password", "err_passwordrepeat_msg"))
		{
			//alert("3");
			e++;
		}
		if(isEmpty("CPR", "Please type in your CPR", "err_CPR_msg"))
		{
			//alert("4");
			e++;
		}
		if(isEmpty("Roles", "Please type in your roles", "err_roles_msg"))
		{
			alert("5");
			e++;
		}
		
		
		alert("right before end");
		if(e > 0) {
			alert("Please fill login details");
			return false;
		}
		else
		{
			return true;
		}
	}
	
	
	function isEmpty(field, message, error_field){
			var r = document.getElementById(field);
			var error_field = document.getElementById(error_field);
			if(r.value.replace(/\s+$/, "") == "")
			{
				error_field.innerHTML = message;
				r.value = "";
				r.focus();
				return true;
			}
			else
			{
				error_field.innerHTML = "";
				return false;
			}
	}


	function checkPassword() {
		var pass = document.getElementById('psw').value;
		var con_pass = document.getElementById('psw_repeat').value;
		if (pass === con_pass){
			document.getElementById('err_passwordrepeat_msg').innerHTML = '';
			return true;
		} else {
			document.getElementById('err_passwordrepeat_msg').innerHTML = 'Password matcher ikke';
			return false;
		}
	}

	function validate_login(){
		//alert("function is there");
		var e = 0;
		if(isEmpty("fname", "Please type in your username", "err_username_msg"))
		{
			//alert("1");
			e++;
		}
		if(isEmpty("user_password", "Please type in your password", "err_password_msg"))
		{
			//alert("2");
			e++;
		}
		else
		{
			return true;
		}
	}

})

