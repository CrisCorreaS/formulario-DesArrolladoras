/*-------------------------- Variables y constantes-------------------- */
var inputNombre = document.getElementById('name');
var inputEmail = document.getElementById('email');
var inputpassword = document.getElementById("password");
var inputpasswordConfirm = document.getElementById('passwordConfirm');

var spanNombre = document.getElementById('nombreErroneo');
var spanEmail = document.getElementById('emailErroneo');
var spanpassword= document.getElementById('passwordErronea');
var spanpasswordConfirm = document.getElementById('passwordConfirmadaErronea');

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
formulario.noValidate = true;

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
  password: /^.{8,}$/, 
}

/*-------------------------- Inputs de los atributos-------------------- */
inputNombre.oninput = function () {
  validarNombre();
};

inputEmail.oninput = function () {
  validarEmail();
};

inputpassword.oninput = function () {
  validarpassword ();
};

inputpasswordConfirm.oninput = function () {
  validarpasswordConfirm ();
}; 

/*-------------------------- funciones de validación de atributos-------------------- */
function validarNombre() {
  if (!inputNombre.value) {
    spanNombre.style.display = "block"
    spanNombre.innerHTML = 'Rellene este campo';
    inputNombre.classList.add('input-nombre')
  } else if (!expresiones.name.test(inputNombre.value)) {
    inputNombre.setAttribute("valid", false)
    spanNombre.style.display = "block"
    spanNombre.innerHTML = 'Nombre inv&aacute;lido';
    inputNombre.classList.add('input-nombre')
  } else {
    spanNombre.style.display = "none"
    spanNombre.innerHTML = '';
  }
};

function validarEmail() {
  if (!inputEmail.value) {
    spanEmail.style.display = "block"
    spanEmail.innerHTML = 'Rellene este campo';
    inputEmail.classList.add('input-email')
  } else if (!expresiones.email.test(inputEmail.value)) {
    inputEmail.setAttribute("valid", false)
    spanEmail.style.display = "block"
    spanEmail.innerHTML = 'Email inv&aacute;lido';
    inputEmail.classList.add('input-email')
  } else {
    spanEmail.style.display = "none"
    spanEmail.innerHTML = '';
  }
};

function validarpassword () {
  if (!inputpassword.value) {
    spanpassword.style.display = "block"
    spanpassword.innerHTML = 'Rellene este campo';
    inputpassword.classList.add('input-password')
  } else if (!expresiones.password.test(inputpassword.value)) {
    inputpassword.setAttribute("valid", false)
    spanpassword.style.display = "block"
    spanpassword.innerHTML = 'Debe contener al menos 8 carácteres';
    inputpassword.classList.add('input-password')
  } else {
    spanpassword.style.display = "none"
    spanpassword.innerHTML = '';
  }
};

function validarpasswordConfirm() {
    if (!inputpasswordConfirm.value) {
        spanpasswordConfirm.style.display = "block"
        spanpasswordConfirm.innerHTML = 'Rellene este campo';
        inputpasswordConfirm.classList.add('input-passwordConfirm')
    } else if(!expresiones.password.test(inputpasswordConfirm.value)) {
        inputpasswordConfirm.setAttribute("valid", false)
        spanpasswordConfirm.style.display = "block"
        spanpasswordConfirm.innerHTML = 'La contraseña debe tener al menos 8 caracteres';
        inputpasswordConfirm.classList.add('input-passwordConfirm')
    } else if (inputpasswordConfirm.value !== inputpassword.value) {
        inputpasswordConfirm.setAttribute("valid", false)
        spanpasswordConfirm.style.display = "block"
        spanpasswordConfirm.innerHTML = 'Las contraseñas no coinciden';
        inputpasswordConfirm.classList.add('input-passwordConfirm')
    } else {
        spanpasswordConfirm.style.display = "none"
        spanpasswordConfirm.innerHTML = '';
    }
}

/*--------------- Mensaje de alert cuando la inscripción está completada-------------------- */
formulario.onsubmit = function (e) {
    e.preventDefault();
    this.checkValidity() ? (alert('¡La inscripción se ha completado correctamente!'))
        : (
            validarNombre(),
            validarEmail(),
            validarpassword(),
            validarpasswordConfirm()
         )
};