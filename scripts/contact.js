// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const submitButtonPress = document.getElementById("submit-button")
submitButtonPress.addEventListener("click", submit)

function submit() {
    let afterSubmission = document.getElementById("contact-page")
    afterSubmission.innerHTML = '<p>Thank you for your message</p>';
    afterSubmission.classList.add("large-text");
}

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
