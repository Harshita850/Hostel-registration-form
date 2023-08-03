document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var rollNumber = document.getElementById('rollNumber').value;
    var course = document.getElementById('course').value;
    var year = document.getElementById('year').value;
  

    if (name.trim() === '' || email.trim() === '' || contact.trim() === '' || rollNumber.trim() === '' || course.trim() === '' || year === '') {
      alert('Please fill in all the fields.');
      return;
    }
  
    
    var formData = {
      'Full Name': name,
      'Email': email,
      'Contact Number': contact,
      'University Roll Number': rollNumber,
      'Course': course,
      'Year of Study': year
    };
  

    console.log(formData);
  

    window.location.href = 'success.html';
  });
  