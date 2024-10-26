const cat = document.querySelector('.cat');
const catSound = document.getElementById('catSound');

cat.addEventListener('click', () => {
    cat.classList.add('jump');
    catSound.play(); // Play the sound

    setTimeout(() => {
        cat.classList.remove('jump');
    }, 500);
});