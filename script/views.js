const roulette = ['๐คฃ', '๐ฅณ', '๐', '๐', '๐คฌ', '๐', '๐', '๐คฃ', '๐คฏ', 'โน๏ธ', '๐ค', '๐', '๐ฅบ', '๐คจ', '๐คช'];

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
        button.innerHTML = '๐ฒ';
    }, 500);

}