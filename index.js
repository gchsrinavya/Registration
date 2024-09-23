function validateForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Reset error messages
    document.getElementById('fullNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneNumberError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Check full name length
    if (fullName.length < 5) {
        document.getElementById('fullNameError').textContent = 'Full Name must be at least 5 characters.';
        return false;
    }

    // Check if email contains @
    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        return false;
    }

    // Check if phone number is 123456789 or not a 10-digit number
    if (phoneNumber === '123456789' || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        document.getElementById('phoneNumberError').textContent = 'Enter a valid 10-digit phone number.';
        return false;
    }
    if(phoneNumber.length<10){
        alert("Phone Number should contain 10 digits.");
    }

    // Check password criteria
    if (password === 'password' || password === fullName || password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password is not strong enough.';
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        return false;
    }

    return true; // Form is valid
}