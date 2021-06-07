const retrospectives = [
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
    `Your day was like a chocolate box. What was the chocolate that delighted you? What was the chocolate that seemed really good but tasted awful? What was the chocolate that surprised you and was better than expected?`,
    `If today was in Star Wars... When was it when you stumbled upon Darth Vader without your lightsaber? When was it when you used your Jedi powers? When was it you went to train with Master Yoda to learn new things?`,
    `🎃 Today, what was the spider web in which you got stuck? What was the costume that scared you the most? What were your favorite candies? 🎃`,
    `Your day was in Harry Potter : what is the basilisk you met? What is your patronus to repel dementors? What did you see in the Mirror of Erised?`,
    `Your day was like: when was it when the piton left in your hand? when was it when you climb without your hands? What do we change to be not scare any more?`
];

function randomRetro() {
    return retrospectives[Math.floor(Math.random() * retrospectives.length)];
}
