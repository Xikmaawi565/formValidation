let fullName = document.querySelector('#fullName');
let contactNumber = document.querySelector('#contactNumber');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let error = document.querySelector('#error');

const validate = () => {
    // Remove existing error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    error.textContent = "";

   
    if (fullName.value.trim() === "") {
        displayError(fullName, "Full name is required!");
        return false;
    }
    if (/\d/.test(fullName.value)) {
        displayError(fullName, "Full name cannot contain numbers!");
        return false;
    }

    if (contactNumber.value.trim() === "") {
        displayError(contactNumber, "Contact number is required!");
        return false;
    }

    if (email.value.trim() === "") {
        displayError(email, "Email is required!");
        return false;
    }
    if (email.value.includes(' ')) {
        displayError(email, "Email must not contain spaces!");
        return false;
    }
    if (/[A-Z]/.test(email.value)) {
        displayError(email, "Email must not contain capital letters!");
        return false;
    }

   
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[#@%])[A-Za-z\d#@%]{8,}$/;
    if (!passwordPattern.test(password.value)) {
        displayError(password, "Password must be at least 8 characters long and contain A-Z, a-z, 0-9, #, @, %");
        return false;
    }

    error.textContent = "Form submitted successfully!";
    return true;
};

const displayError = (input, message) => {
    const errorMessage = document.createElement('span');
    errorMessage.className = 'error-message';
    errorMessage.style.color = 'red';
    errorMessage.textContent = message;
    input.parentNode.insertBefore(errorMessage, input.nextSibling);
    input.focus();
};