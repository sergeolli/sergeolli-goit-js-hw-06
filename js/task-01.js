const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(element => {
    const titleEl = element.querySelector('h2');
    console.log(`Category:${titleEl.textContent}`);
    const titleItemEl = element.querySelectorAll('li')
    console.log(`Elements:${titleItemEl.length}`)
});







