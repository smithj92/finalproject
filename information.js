document.addEventListener("DOMContentLoaded", function () {
    // Get the submission info from localStorage
    const submissionInfo = localStorage.getItem("formSubmission");
    const submissionObject = JSON.parse(submissionInfo);
  
    // Mustache template for displaying the submission info
    const template = `
      <p>Name: {{name}}</p>
      <p>Email: {{email}}</p>
      <p>Message: {{message}}</p>
    `;
  
    // Render the template with the submission data
    const rendered = Mustache.render(template, submissionObject);
  
    // Display the rendered template in the submission-info div
    const submissionInfoDiv = document.getElementById("submission-info");
    submissionInfoDiv.innerHTML = rendered;
  
    // Clear the form submission data from localStorage
    localStorage.removeItem("formSubmission");
  });
  