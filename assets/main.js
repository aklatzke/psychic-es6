(() => {
    let elements = {
        wins: document.querySelector(".wins"),
        losses: document.querySelector(".losses"),
        guesses: document.querySelector(".guesses"),
        soFar : document.querySelector(".so-far")
    }

    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let selectedLetter;
    let scores = {
        wins : 0,
        losses: 0
    }

    let writeScores = (wins, losses) => {
        elements.wins.innerHTML = wins;
        elements.losses.innerHTML = losses;
    }

    let handler = event => {
        let key = event.key;
        remainingGuesses--;

        elements.soFar.innerHTML += (" " + key);
        elements.guesses.innerHTML = remainingGuesses;

        if( selectedLetter === key ){
            scores.wins++;
            init();
        } 

        if( remainingGuesses === 0 ){
            scores.losses++;
            init();
        }
    }

    let init = () => {
        writeScores( scores.wins, scores.losses );
        remainingGuesses = 9;
        selectedLetter = letters[Math.floor(Math.random() * letters.length)].toLowerCase();
        elements.soFar.innerHTML = "";
        
        document.removeEventListener("keyup", handler);
        document.addEventListener("keyup", handler);
    }

    init();
})();