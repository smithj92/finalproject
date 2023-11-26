document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    const jsonFormData = JSON.stringify(formDataObject);

    // Save the form submission data to localStorage
    localStorage.setItem("formSubmission", jsonFormData);

    // Open information.html in a new tab
    window.open("information.html", "_blank");
  });
});

  
  // Function for visitor counter
  document.addEventListener("DOMContentLoaded", function () {
    let visitorCount = localStorage.getItem("visitorCount") || 0;
    visitorCount = parseInt(visitorCount) + 1;
  
    localStorage.setItem("visitorCount", visitorCount);
    document.getElementById("visitor-count").textContent = visitorCount;
  });
  