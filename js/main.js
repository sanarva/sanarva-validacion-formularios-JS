/*Aquí validaremos el formulario de búsqueda "SearchForm" para asegurarnos que el campo "buscar" está informado antes de hacer clic en el botón "Buscar". Además, daremos un erro en el caso de que la palabra introducida tenga menos de tres caracteres*/


/*Declaramos una variable para meter todos los campos del formulario y así luego poder poner la sentencia  searchForm.classList.remove('is-invalid');, la cuál elimina la clase de bootstrap is - invalid.*/
const searchForm = document.getElementById("searchForm");

function validateSearchForm() {

    //Reinicia los errores
    let totalErrors = 0;

    //Quita la clase "is-invalid" del formulario de búsqueda para que no aparezca todo en rojo
    searchForm.classList.remove("is-invalid");

    let buscarPor = document.getElementById("buscarPorId");

    if (buscarPor.value == "") {
        buscarPor.classList.add("is-invalid");
        document.getElementById("errorSearch").textContent = "Por favor, introduzca una palabra";
        totalErrors++;
    } else if (buscarPor.value.length < 3) {
        buscarPor.classList.add("is-invalid");
        document.getElementById("errorSearch").textContent = "La palabra ha de contener al menos 3 caracteres";
        totalErrors++;
    }

    if (totalErrors > 0) {
        return false;
    } else {
        return true;
    }

}

/*Este trozo de código sirve para que, si el formulario se ha quedado en rojo, al rellenar el campo y tabular, se limpien los campos y no aparezcan en rojo. Analizarlo bien porque usa la función flecha y yo no tengo ni puñetera idea de cómo van este tipo de funciones. ¿Eso de 'blur' qué es lo que es?*/
//Le ponemos el if porque si no estamos en este formulario, al tener todo el código en el mismo fichero, fallará
if (searchForm) {
    searchForm.addEventListener("blur", (event) => {
        console.log(event);
        if (event.target.value != "") event.target.classList.remove("is-invalid");
    }, true);

}



/*Aquí validaremos el formulario de login "loginForm" para asegurarnos que los campos de email y contraseña están informados. Además, validaremos el formato del email */


/*Declaramos una variable para meter todos los campos del formulario y así luego poder poner la sentencia loginForm.classList.remove('is-invalid'); , la cuál elimina la clase de bootstrap is-invalid.*/
const loginForm = document.getElementById("loginForm");

function validateLoginForm() {

    //Reinicia los errores
    let totalErrors = 0;

    //Quita la clase "is-invalid" del formulario de login para que no aparezca todo en rojo
    loginForm.classList.remove("is-invalid");

    //Validamos el campo de email    
    let emailLogin = document.getElementById("emailLogin");

    if (emailLogin.value == "") {
        emailLogin.classList.add("is-invalid");
        document.getElementById("errorEmailLogin").textContent = "Por favor, escribe tu email";
        totalErrors++;

    } else if (!validarEmail(emailLogin.value)) {
        emailLogin.classList.add("is-invalid");
        document.getElementById("errorEmailLogin").textContent = "Escribe un email válido";
        totalErrors++;
    }

    //Validamos el campo de contraseña 

    if (passwordLogin.value == "") {
        passwordLogin.classList.add("is-invalid");
        document.getElementById("errorPasswordLogin").textContent = "Por favor, introduce tu contraseña";
        totalErrors++;
    }

    if (totalErrors > 0) {
        return false;
    } else {
        return true;
    }
}

/*Este trozo de código sirve para que, si el formulario se ha quedado en rojo, al rellenar el campo y tabular, se limpien los campos y no aparezcan en rojo.*/
//Le ponemos el if porque si no estamos en este formulario, al tener todo el código en el mismo fichero, fallará

if (loginForm) {
    loginForm.addEventListener("blur", (event) => {
        console.log(event);
        if (event.target.value != "") event.target.classList.remove("is-invalid");
    }, true);
}





/*Aquí validaremos el formulario de registro "registrationForm" para asegurarnos que:
    1. Todos los campos están informados. El campo fecha de nacimiento me servirá para felicitar a los usuarios, por ejm, y enviarles promociones y  descuentos en los cumpleaños, además de saber el rango de edad.
    Con las provincias me haré una idea de dónde interesa más el producto
    2. Validaremos que el formato del email sea correcto
    3. Ambas contraseñas deben coincidir*/


/*Declaramos una variable para meter todos los campos del formulario y así luego poder poner la sentencia loginForm.classList.remove('is-invalid'); , la cuál elimina la clase de bootstrap is-invalid.*/
const registrationForm = document.getElementById("registrationForm");

function validateRegistrationForm() {

    //Reinicia los errores
    let totalErrors = 0;

    //Quita la clase "is-invalid" del formulario de login para que no aparezca todo en rojo
    registrationForm.classList.remove("is-invalid");

    //Validamos que el campo de email esté informado y además tenga un formato correcto  
    let emailRegistration = document.getElementById("emailRegistration");

    if (emailRegistration.value == "") {
        emailRegistration.classList.add("is-invalid");
        document.getElementById("errorEmailRegistration").textContent = "Por favor, escribe tu email";
        totalErrors++;

    } else if (!validarEmail(emailRegistration.value)) {
        emailRegistration.classList.add("is-invalid");
        document.getElementById("errorEmailRegistration").textContent = "Escribe un email válido";
        totalErrors++;
    }

    //Validamos que el campo de contraseña 1 esté informado
    if (passwordRegistration1.value == "") {
        passwordRegistration1.classList.add("is-invalid");
        document.getElementById("errorPasswordRegistration1").textContent = "Por favor, introduce una contraseña";
        totalErrors++;
    }

    //Validamos el campo de contraseña 2 para que esté informado y además coincida con la contraseña de arriba (passwordRegistration2)
    if (passwordRegistration2.value == "") {
        passwordRegistration2.classList.add("is-invalid");
        document.getElementById("errorPasswordRegistration2").textContent = "Por favor, introduce una contraseña";
        totalErrors++;
    } else if (passwordRegistration1.value != passwordRegistration2.value) {
        passwordRegistration2.classList.add("is-invalid");
        document.getElementById("errorPasswordRegistration2").textContent = "Las contraseñas no coinciden";
        totalErrors++;
    }

    //Validamos el campo del nombre para que esté informado y además tenga más de dos letras
    if (nameRegistration.value == "") {
        nameRegistration.classList.add("is-invalid");
        document.getElementById("errorNameRegistration").textContent = "Por favor, introduce tu nombre";
        totalErrors++;
    } else if (nameRegistration.length < 2) {
        nameRegistration.classList.add("is-invalid");
        document.getElementById("errorNameRegistration").textContent = "Tu nombre tiene que contener al menos dos letras";
        totalErrors++;
    }

    //Validamos que el campo de fecha de nacimiento esté informado
    if (birthDateRegistration.value == "") {
        birthDateRegistration.classList.add("is-invalid");
        document.getElementById("errorBirthDateRegistration").textContent = "Por favor, introduce tu fecha de nacimiento";
        totalErrors++;
    }

    //Validamos que el campo de provincia esté informado
    if (provinceRegistration.value == "") {
        provinceRegistration.classList.add("is-invalid");
        document.getElementById("errorProvinceRegistration").textContent = "Por favor, selecciona una provincia";
        totalErrors++;
    }

    //Validamos que se haya aceptado la check de política de privacidad
    if (!checkRegistration.checked) {
        checkRegistration.classList.add("is-invalid");
        document.getElementById("errorCheckRegistration").textContent = "Por favor, acepta la política de privacidad";
        totalErrors++;
    }

    if (totalErrors > 0) {
        return false;
    } else {
        return true;
    }
}

/*Este trozo de código sirve para que, si el formulario se ha quedado en rojo, al rellenar el campo y tabular, se limpien los campos y no aparezcan en rojo.*/
//Le ponemos el if porque si no estamos en este formulario, al tener todo el código en el mismo fichero, fallará

if (registrationForm) {
    registrationForm.addEventListener("blur", (event) => {
        console.log(event);
        if (event.target.value != "") event.target.classList.remove("is-invalid");
    }, true);
}


//Con esta función validamos que el campo de email tenga un formato correcto

function validarEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}
