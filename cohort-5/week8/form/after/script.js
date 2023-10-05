function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Get form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const quantity = document.getElementById('quantity').value;

    // Validate inputs
    let isValid = true;

    if (!name) {
        displayError('nameError', 'Please enter your name');
        isValid = false;
    }

    if (!email) {
        displayError('emailError', 'Please enter your email');
        isValid = false;
    } else if (!validateEmail(email)) {
        displayError('emailError', 'Please enter a valid email');
        isValid = false;
    }

    if (!address) {
        displayError('addressError', 'Please enter your address');
        isValid = false;
    }

    if (!phone) {
        displayError('phoneError', 'Please enter your phone number');
        isValid = false;
    }

    if (!quantity) {
        displayError('quantityError', 'Please enter the quantity');
        isValid = false;
    }

    // If all inputs are valid, proceed with form submission
    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('orderForm').reset(); // Reset form
    }
}

function displayError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearErrors() {
    const errorElements = document.getElementsByClassName('error');
    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}