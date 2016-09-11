
jQuery(document).ready(function() {
	
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");
    
    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    
});


function validatelogin() {
	var us = document.login_form.form-username.value;
	var pw = document.login_form.form-username.value;
	var username = localStorage.getItem("Username")
	var password = localStorage.getItem("Password")
	if ((us == username) && (pw == password)) {
		window.location = "home.html";
		return true;
	}
	else {
		alert ("Login was unsuccessful, please check your username and password");
		return false;
	}
}
