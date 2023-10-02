const template = document.getElementById("user-card-template");
let contacts = document.getElementById("contacts");

document.addEventListener('userDataReady', function(event){
    // Parse JSON data into array
    let jsonData = event.detail.jsonText;
    const jsonArr = JSON.parse(jsonData);

    // Iterate over all the user data
    jsonArr.forEach(elem => {
         // Clone of the template
        let clone = template.content.cloneNode(true);
        console.log(clone);

        // Card div
        const card = clone.children.item(0);
        console.log(card);
        // Avatar
        card.querySelector('img').src = elem.avatar;
        card.querySelector('img').alt = elem.username;
        // Heading
        card.querySelector('h1').innerText = elem.firstName.concat(" ", elem.lastName);
        // Email
        card.getElementsByClassName("title email").item(0).innerText = elem.email;
        // Phone number
        card.getElementsByClassName("phone").item(0).firstElementChild.innerText = elem.phoneNumber;
        // Address
        const address = card.getElementsByClassName("address").item(0).querySelectorAll('p');
        address.item(0).innerText = elem.address.streetAddress;
        address.item(1).innerText = elem.address.zipCode;
        address.item(2).innerText = elem.address.country;
        // Homepage
        clone.querySelector(".homepage a").textContent = elem.homepage;
        clone.querySelector(".homepage a").setAttribute("href", elem.homepage);
        console.log(clone);

        // Add to contacts
        contacts.appendChild(clone);
    });
});


fetchUserData();

