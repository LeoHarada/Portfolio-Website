const contactForm = document.querySelector('#contact-form');
const submitButton = document.querySelector('.submit-button');
const subjectInput = document.querySelector('#subject')
const nameInput = document.querySelector('#user_name');
const emailInput = document.querySelector('#user_email');
const messageInput = document.querySelector('#message');

const publicKey = 'MiFGG61-WxKnTxZ7f';
const serviceId = 'service_e6gftku';
const templateId = 'template_1aas5jr';

emailjs.init(publicKey);

contactForm.addEventListener('submit', e => {
    e.preventDefault();
    submitButton.innerText = "Just a Moment...";

    const inputFields = {
        subject: subjectInput.value,
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }

    emailjs.send(serviceId, templateId, inputFields)
    .then(() => {
        submitButton.innerText = "Message Sent Successfuly";

        subjectInput.value = "";
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }, (error) => {
        console.log(error);
        submitButton.innerText = "Something went wrong";
    });
});