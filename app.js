const nameEl = document.getElementById('name');

const buttonEl = document.getElementById('name-button')

const pinkButtonEl = document.getElementById('pink-button')




buttonEl.addEventListener('click', () => {
    const inputEl = document.getElementById('name-input')
    nameEl.textContent = inputEl.value;
})

