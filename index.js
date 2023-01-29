const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e =>{
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.ariaValueMax.trim();
    const emailValue = email.ariaValueMax.trim();
    const passwordValue = password.ariaValueMax.trim();
    const password2Value = password2.ariaValueMax.trim();

    if (usernameValue === '') {
        setError(username, 'Rellena este campo');
    }
    else {
        if (usernameValue === '/^[A-Z]+$/i') {
            setError(username, 'Nombre inválido');
        }
        else {
            setSuccess(username);
        }
    }

    if (emailValue === '') {
        setError(username, 'Rellena este campo');
    }
    else {
        if (!isValidEmail(emailValue)) {
            setError(email, 'Email inválido')
        }
        else {
            setSuccess(email);
        }
    }
    
    if (passwordValue === '') {
        setError(username, 'Rellena este campo');
    }else if (passwordValue.length > 8) {
        setError(password, 'No debe tener más de 8 caracteres')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Rellena este campo');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Las contraseñas no coinciden");
    } else {
        setSuccess(password2);
    }


}