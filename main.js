
// get 
const content = document.getElementById('bodyContent');
const mode = document.getElementById('mode');

mode.addEventListener('click', () => {
    content.classList.toggle('dark-mode')
});
