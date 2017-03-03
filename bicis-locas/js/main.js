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
              var bicycles      = document.getElementsByClassName("form-control")[4];

              var expressionOnlyLetters          = /^[A-Za-z]+$/;
              var expressionFirstLetterUppercase = /^[A-Z]/;
              var expressionEmail                = /\w+@+\w+\.+[a-z]/;
              var expressionPassword6Characters  =/^[A-Za-z0-9_]{1,6}$/;

             return (inputName.value    =="") ? alert("Enter your name"):
                    (inputLastName.value=="" )? alert("Enter your last name"):
                    (inputEmail.value   =="") ? alert("Enter your e-mail"):
                    (inputPassword.value=="") ? alert("Enter your password"):

                    (!expressionOnlyLetters.test(inputName.value))     ? alert("Name can contain only letters"):
                    (!expressionOnlyLetters.test(inputLastName.value)) ? alert("Last Name can contain only letters"):

                    (!expressionFirstLetterUppercase.test(inputName.value))     ? alert("Name should starts with a capital"):
                    (!expressionFirstLetterUppercase.test(inputLastName.value)) ? alert("Last Name should starts with a capital"):

                    (!expressionEmail.test(inputEmail.value)) ? alert("Enter a valid e-mail"):

                    (!expressionPassword6Characters.test(inputPassword.value)) ? alert("Password should have only 6 characters"):
                    (inputPassword.value=="password" || inputPassword.value=="123456" ||inputPassword.value=="098754") ? alert("That's not a valid password"):
                    (bicycles.value=="0") ? alert("Choose a bicycle")  :
                    "";

        })
  })
}  validateForm();
