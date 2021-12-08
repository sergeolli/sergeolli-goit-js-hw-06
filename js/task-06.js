const imputEl = document.querySelector('#validation-input');
imputEl.addEventListener('blur', onImputBlur);

function onImputBlur(event) {
    const imputLength = event.currentTarget.value.trim().length;
    if (imputLength === Number (imputEl.dataset.length)) {
        imputEl.classList.add('valid');
          imputEl.classList.remove('invalid');
    }
    else {
        imputEl.classList.remove('valid')
        imputEl.classList.add('invalid')
    }
    
}