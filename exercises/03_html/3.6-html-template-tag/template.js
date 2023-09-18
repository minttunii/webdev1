contacts = document.getElementById("contacts");
form = document.getElementById("form");
template = document.querySelector("#contact-template");

form.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    // Get form data
    formData = new FormData(form);
    // Make clone of template and add data from form into the clone
    const clone = template.content.cloneNode(true);
    // Name
    clone.getElementByTagName("h2").textContent = formData.get("name");
    // Email
    clone.getElementByClass("email").textContent = formData.get("email");
    // Homepage
    clone.getElementByClass("homepage").href = formData.get("homepage");
    // Append clone into contacts
    contacts.appendChild(clone);
    form.reset();
});

