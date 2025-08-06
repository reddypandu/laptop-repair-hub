const callbackForm = document.getElementById('callbackForm');

callbackForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(callbackForm);

  fetch('process_callback.php', { // Replace with the actual path to your PHP script
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    // Handle success or error message from the server
    if (data === 'success') { // Check for successful response from PHP
      const modalBody = document.querySelector('.modal-body');
      modalBody.innerHTML = `
        <div class="alert alert-success" role="alert">
        Thanks for booking our door-step repair service! <br> 
        A service engineer will be in touch shortly to confirm your appointment details.
        </div>
      `;
    } else {
      console.error("Error:", data);
      // Show an error message in the modal if submission failed
    }
  })
  .catch(error => {
    console.error(error);
    // Handle errors during submission
  });
});
