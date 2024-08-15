document.getElementById('statusToggle').addEventListener('change', function() {
 var statusText = document.getElementById('statusText');
 if (this.checked) {
     statusText.textContent = 'Active';
 } else {
     statusText.textContent = 'Inactive';
 }
});
