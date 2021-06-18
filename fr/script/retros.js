const retrospectives = [
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
    `Ta journée était comme une boîte de chocolat. Quel était le chocolat qui t'a fait plaisir ? Quel était le chocolat qui semblait vraiment bon mais qui avait un goût affreux ? Quel est le chocolat qui t'as le plus surprise et qui était meilleur que prévu ?`,
    `Si aujourd'hui on était dans Star Wars... C'était quand le moment où tu t'es tombée face à face à Dark Vador et que t'avais oublié ton sabre laser ? C'était quand le moment où t'as utilisé tes pouvoirs de Jedi ? C'était quand le moment où t'es allée t'entraîner avec Maître Yoda et où t'as appris des choses ?`,
    `🎃 Aujourd'hui, c'était quoi la toile d'araignée dans laquelle tu t'es engluée ? C'était quoi le costume qui t'as fait le plus peur ? C'était quoi tes bonbons préférés ? 🎃`,
    `Ta journée dans harry potter : c'était quoi le basilic que tu as rencontré ? Quel était ton patronus pour échapper aux détraqueurs ? Qu'as tu vu dans le miroir de Riséd ?`,
    `Ta journée comme une voie d'escalade : le moment ou le piton t’est resté dans les doigts ? le moment ou t’as réussi à grimper sans les mains ? Qu’est-ce qu’on change pour plus se faire peur ?`,
    `Ta journée comme une partie de bowling 🎳 : quel était le coup raté ? quel était le spare ? quel était le strike ?`
];


function randomRetro() {
    return retrospectives[Math.floor(Math.random() * retrospectives.length)];
}
