document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Fetching user input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var rollNumber = document.getElementById('rollNumber').value;
    var course = document.getElementById('course').value;
    var year = document.getElementById('year').value;
  
    // Form validation
    if (name.trim() === '' || email.trim() === '' || contact.trim() === '' || rollNumber.trim() === '' || course.trim() === '' || year === '') {
      alert('Please fill in all the fields.');
      return;
    }
  
    // Create an object to store the form data
    var formData = {
      'Full Name': name,
      'Email': email,
      'Contact Number': contact,
      'University Roll Number': rollNumber,
      'Course': course,
      'Year of Study': year
    };
  
    // You can choose to send this formData object to a server using AJAX or fetch API
    // For this example, we'll just display the data in the console
    console.log(formData);
  
    // Redirecting to a success page (you can replace 'success.html' with the actual success page URL)
    window.location.href = 'success.html';
  });
  