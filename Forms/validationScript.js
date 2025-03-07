    // JavaScript code for form validation
	// Prevent form from submitting
document.getElementById('myForm').addEventListener('submit', function(event){
  event.preventDefault();


    // Retrieve the input field value
  let inputVal = document.getElementById('inputField').value;

      // Regular expression pattern for alphanumeric input
  let regex = /^[a-zA-Z0-9]*$/

      // Check if the input value matches the pattern
  if (regex.test(inputVal)){

        // Valid input: display confirmation and submit the form
    document.getElementById('myForm').submit();
    alert("Form submitted successfully!");} else {

        // Invalid input: display error message
    alert("Submission must only contain alphanumeric characters!");
  };
});