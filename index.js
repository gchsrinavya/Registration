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
    let isValid = true;
  // Regular expression to check if full name contains only letters and spaces
  const nameRegex = /^[A-Za-z\s]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



  // Check full name length and characters
  if (fullName.length < 5) {
      document.getElementById('fullNameError').textContent = 'Full Name must be at least 5 characters.';
      return false;
  } else if (!nameRegex.test(fullName)) {
      document.getElementById('fullNameError').textContent = 'Full Name must contain only letters and spaces.';
      return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        isValid = false;
    }

    // Validate phone number for exactly 10 digits
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        document.getElementById('phoneNumberError').textContent = 'Enter a valid 10-digit phone number.';
        isValid = false;
    }
    // Check password criteria
    if (password === 'password' || password === fullName || password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password is not strong enough.';
        return false;
    }
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character.';
        return false;
    }


    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        return false;
    }

    return true; // Form is valid
}
