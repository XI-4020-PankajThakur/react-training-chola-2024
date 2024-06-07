function validate(){
    window.alert("submitted successfully")
}
        
        document.getElementById('myForm').addEventListener('submit', function(event) {
            // Custom validation
            let isValid = true;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const age = document.getElementById('age').value;

            // Example: Custom name validation
            if (name.length < 3) {
                alert('Name must be at least 3 characters long.');
                isValid = false;
            }

            // Example: Custom email validation (simple regex for demonstration)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                isValid = false;
            }

            // Example: Custom age validation
            if (age < 1 || age > 100) {
                alert('Age must be between 1 and 100.');
                isValid = false;
            }

            if (!isValid) {
                // Prevent form submission if validation fails
                event.preventDefault();
            }
        
        });
    