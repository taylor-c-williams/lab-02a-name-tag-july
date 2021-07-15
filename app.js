const nameEl = document.getElementById('name')
const pronounEl = document.getElementById('pronoun')
const buttonEl = document.getElementById('name-button')
const pinkButtonEl = document.getElementById('pink-button')
const purpleButtonEl = document.getElementById('purple-button')
const greenButtonEl = document.getElementById('green-button')
const blackButtonEl = document.getElementById('black-button')
const whiteButtonEl = document.getElementById('white-button')


buttonEl.addEventListener('click', () => {         
    const inputEl = document.getElementById('name-input')
    const pronounInputEl = document.getElementById('pronoun-input')
    nameEl.textContent = inputEl.value;
    pronounEl.textContent = pronounInputEl.value;
})

pinkButtonEl.addEventListener('click', () => {         
    document.getElementById('middle-section').style.backgroundColor = "rgba(255, 188, 237, 1)"
    document.getElementById('middle-section').style.color = "black" 
})

purpleButtonEl.addEventListener('click', () => {         
    document.getElementById('middle-section').style.backgroundColor = "rgba(148, 75, 228, 1)"
    document.getElementById('middle-section').style.color = "black" 
})

greenButtonEl.addEventListener('click', () => {         
    document.getElementById('middle-section').style.backgroundColor = "rgba(161, 245,46, 1)" 
    document.getElementById('middle-section').style.color = "black"
})

blackButtonEl.addEventListener('click', () => {         
    document.getElementById('middle-section').style.backgroundColor = "black" 
    document.getElementById('middle-section').style.color = "white" 
})

whiteButtonEl.addEventListener('click', () => {         
    document.getElementById('middle-section').style.backgroundColor = "white" 
    document.getElementById('middle-section').style.color = "black"
    nameEl.textContent = "unknown!"
    pronounEl.textContent = "unknown!"
    
})

const pacificoEl = document.getElementById('pacifico')
const playfairEl = document.getElementById('playfair-display')
const quicksandEl = document.getElementById('quicksand')
const yomogiEl = document.getElementById('yomogi')
const spacemonoEl = document.getElementById('space-mono')

pacificoEl.addEventListener('click', () => {         
    document.getElementById('middle-section').style.fontFamily = "'Pacifico',cursive" })

 playfairEl.addEventListener('click', () => {         
    document.getElementById('middle-section').style.fontFamily="'Playfair Display', serif" })

quicksandEl.addEventListener('click', () => {         
    document.getElementById('middle-section').style.fontFamily="'Quicksand', sans-serif" })

yomogiEl.addEventListener('click', () => {         
    document.getElementById('middle-section').style.fontFamily="'yomogi', cursive" })

spacemonoEl.addEventListener('click', () => {         
     document.getElementById('middle-section').style.fontFamily="'Space Mono', monospace" })
