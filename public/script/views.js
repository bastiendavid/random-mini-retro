const roulette = ['🤣', '🥳', '😎', '😅', '🤬', '😁', '😇', '🤣', '🤯', '☹️', '😤', '😖', '🥺', '🤨', '🤪'];

function showRandomRetrospective() {
    const element = document.getElementById('selected-retrospective');
    const button = document.getElementById('select-button');
    element.innerHTML = '';
    const interval = setInterval(() => {
        button.innerHTML = roulette[Math.floor(Math.random() * roulette.length)];
    }, 60);
    setTimeout(() => {
        clearInterval(interval);
        const selectedRetrospective = randomRetro();
        element.innerHTML = selectedRetrospective;
        button.innerHTML = '🎲';
    }, 500);

}