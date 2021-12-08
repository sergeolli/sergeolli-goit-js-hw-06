const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        mail, password,
    };
    
    if (mail === '' || password === '') {
         alert('All fields must be completed!');
    } else {
     console.log(formData)
     form.reset();
     }

};
