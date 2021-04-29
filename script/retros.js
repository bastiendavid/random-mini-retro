let retrospectives = [
    `What was one thing you loved today? One thing you disliked? And one thing we will change tomorrow?`,
    `What was one thing you learned? One thing you knew? And one thing we will experiment tomorrow?`,
    `What was one thing you learned? One thing you would do differently? and on thing you liked?`,
    `If your day was like a meal, it was like what?`,
    `If your day was like a roller coaster, what was the slow ascent? What was the fast descent? What was the looping?`,
    `If you day was like a movie, it was like what?`,
    `If you day was like a fairy tale, what was the dragon in the code? What was the treasure you found? And what will be your quest tomorrow?`,
    `If you were a superhero today, who were you?`,
    `What were your 5 favorites minutes of the day? What were the 5 minutes that won’t ever happen again? What will be the best 5 minutes tomorrow?`,
    `How was your day?`,
    `Retromoji!: What was your day using only emojis?`,
    `If your day was like water, it was like what?`,
    `Who are you grateful for today and why? What did you offer to the group today? What will you offer to the group tomorrow?`,
    `What is one thing you are ashamed of today? What is one thing you are proud of? What will you be proud of tomorrow?`,
    `If your day was like a day in the Tour de France, it was like what?`,
    `If you day was like a theme park, what was the excruciatingly slow queue? What was your favorite attraction?`,
    `If your day was like a Mario Kart race, what was the banana peel that slowed you down? What was the mushroom that sped you up? What was the star that made you super fast and invincible?`,
    `If your day was like a skiing day, what was the green piste? The black piste? What was the flat section where you had to push?`,
    `What made me laugh today? What was painful? What will we do tomorrow so that nothing will be painful?`,
    `If your day was like a movie or a TV show, it was like what?`,
    `If your day was like a menu at the restaurant, it was like what?`,
    `If your day was a song, which one was it?`,
    `If you would describe your day in a metaphor, it would be like what?`,
    `What were 2 things you learned? One thing you liked? And what will we do tomorrow to make it a great day?`,
    `If the result of the work we did today was like a building, it was like what?`,
    `Your day was like a chocolate box. What was the chocolate that delighted you? What was the chocolate that seemed really good but tasted awful? What was the chocolate that surprised you and was better than expected?`
];

if (/^fr\b/.test(navigator.language)) {
    retrospectives = [
        `Quelle est une chose que tu as aimée aujourd'hui ? Une chose que tu n'as pas aimée ? Et une chose que nous changerons demain ?`,
        `Quelle est une chose que tu as apprise ? Une chose que tu savais déjà ? Et une chose qu'on expérimentera demain ?`,
        `Quelle est une chose que tu as apprise ? Une que tu ferais différemment ? Et une chose que tu as aimée ?`,
        `Si ta journée était comme un plat, ce serait comme quoi ?`,
        `Si ta journée était comme un grand-huit, quand c'était la longue montée ? Quand était la descente rapide ? Quand était le looping ?`,
        `Si ta journée était comme un film, c'était quoi ?`,
        `Si ta journée était comme un conte de fée, qu'est-ce qui était le dragon dans le code ? Quel trésor as-tu trouvé ? Et quelle sera ta quête demain ?`,
        `Si tu étais un super-héros ou une super-héroïne aujourd'hui, qui étais-tu ?`,
        `Quelles ont été tes 5 minutes préférées de la journée ? Quelles ont été les 5 minutes qui ne se reproduiront plus jamais ? Quelles seront les 5 meilleures minutes demain ?`,
        `Comment s'est passée ta journée ?`,
        `Retromoji ! : Comment était ta journée en utilisant uniquement des emojis?`,
        `Si ta journée était comme de l'eau, c'était comment ?`,
        `Envers qui es-tu reconnaissante aujourd'hui et pourquoi ? Qu'as-tu offert au groupe aujourd'hui ? Que vas-tu offrir au groupe demain ?`,
        `Quelle est la chose dont tu as honte aujourd'hui ? Quelle est la chose dont tu es fière ? De quoi seras-tu fière demain ?`,
        `Si ta journée ressemblait à une journée du Tour de France, c'était comme quoi ?`,
        `Si ta journée ressemblait à un parc d'attractions, quelle était la file d'attente atrocement lente ? Quelle était ton attraction préférée ?`,
        `Si ta journée ressemblait à une course de Mario Kart, quelle était la peau de banane qui t'as ralenti ? Quel était le champignon qui t'as fait accélérer ? Quelle était l'étoile qui t'as rendu super rapide et invincible ?`,
        `Si ta journée était comme une journée de ski, quelle était la piste verte ? La piste noire ? Quelle était la section plate où tu as dû pousse ?`,
        `Qu'est-ce qui t'a fait rire aujourd'hui ? Qu'est-ce qui était pénible ? Que ferons-nous demain pour que rien ne soit pénible ?`,
        `Si ta journée était comme un film ou une émission de télé, c'était comme quoi ?`,
        `Si ta journée était comme un menu au restaurant, c'était comme quoi ?`,
        `Si ta journée était une chanson, c'était laquelle ?`,
        `Si tu devais décrire ta journée en une métaphore, ce serait comme quoi ?`,
        `Quelles sont les deux choses que tu as apprises ? Une chose que tu as aimée ? Et que ferons-nous demain pour que ce soit une super journée ?`,
        `Si le résultat du travail que nous avons fait aujourd'hui était comme un bâtiment, c'était comme quoi ?`,
        `Ta journée était comme une boîte de chocolat. Quel était le chocolat qui t'a fait plaisir ? Quel était le chocolat qui semblait vraiment bon mais qui avait un goût affreux ? Quel est le chocolat qui t'as le plus surprise et qui était meilleur que prévu ?`
    ];
}

function randomRetro() {
    return retrospectives[Math.floor(Math.random() * retrospectives.length)];
}