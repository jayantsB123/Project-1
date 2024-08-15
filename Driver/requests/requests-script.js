document.querySelectorAll('.accept').forEach(button => {
 button.addEventListener('click', function() {
     alert('Request Accepted');
     // Add functionality to handle request acceptance
 });
});

document.querySelectorAll('.decline').forEach(button => {
 button.addEventListener('click', function() {
     alert('Request Declined');
     // Add functionality to handle request decline
 });
});
