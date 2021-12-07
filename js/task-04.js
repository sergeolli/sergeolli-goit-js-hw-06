
const refs = {
    counterRef: document.querySelector('#counter'),
    valueRef: document.querySelector('#value'),
    lessBtn: document.querySelector('[data-action="decrement"]'),
    moreBtn: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

const changeValue = function (step) {
    
    counterValue = counterValue + step;
    refs.valueRef.textContent = counterValue;
};

refs.lessBtn.addEventListener('click', () => changeValue(-1));
refs.moreBtn.addEventListener('click', () => changeValue(+1));
