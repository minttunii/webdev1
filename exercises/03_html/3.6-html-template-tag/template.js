contacts = document.getElementById("contacts");
const form = document.getElementById("form");
const template = document.getElementById("contact-template");

 form.addEventListener("submit", function(event){
    event.preventDefault();
    // Get the form data
    formData = new FormData(form);
    // Make clone of template and add data from form into the clone
    clone = document.importNode(template.content, true);
    // Name
    clone.querySelector("h2").textContent = formData.get("name");
    // Email
    clone.querySelector(".email").textContent = formData.get("email");
    // Homepage
    clone.querySelector(".homepage a").textContent = formData.get("email");
    clone.querySelector(".homepage a").setAttribute("href", formData.get("homepage"));
    // Append clone into contacts
    contacts.appendChild(clone);
    form.reset();
});

