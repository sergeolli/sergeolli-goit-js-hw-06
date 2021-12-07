const refs = {
    inputEl: document.querySelector("#font-size-control"),

    textEl: document.querySelector("#text")
}

refs.inputEl.addEventListener('input', onInputRangeValue);
 

function onInputRangeValue(event) {
    
refs.textEl.setAttribute('style', `font-size: ${event.currentTarget.value}px`)

}



