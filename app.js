const nameEl = document.getElementById('name');

const pronounEl = document.getElementById('pronoun');

const buttonEl = document.getElementById('name-button')

const pinkButtonEl = document.getElementById('pink-button')




buttonEl.addEventListener('click', () => {         
    const inputEl = document.getElementById('name-input')
    const pronounInputEl = document.getElementById('pronoun-input')
    nameEl.textContent = inputEl.value;
    pronounEl.textContent = pronounInputEl.value;
})

