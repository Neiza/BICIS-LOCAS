function validateForm(){
	/* Escribe tú código aquí */
  window.addEventListener('load', function(){
        var buttonValidation = document.getElementsByClassName('btn')[0];
        buttonValidation.addEventListener('click', function(event){
              event.preventDefault();
              var inputName     = document.getElementById('name');
             var inputLastName = document.getElementById('lastname');
              var inputEmail    = document.getElementById('input-email');
              var inputPassword = document.getElementById('input-password');

             return (inputName.value    =="") ? alert("Enter your name"):
                    (inputLastName.value=="" )? alert("Enter your last name"):
                    (inputEmail.value  =="") ? alert("Enter your e-mail"):
                    (inputPassword.value=="") ? alert("Enter your password"):"";

        })
  })
}  validateForm();
