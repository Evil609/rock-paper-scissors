let result = "";
      let score = JSON.parse(localStorage.getItem("scoreBoard")) || {
        Wins: 0,
        Losses: 0,
        Ties: 0,
      };
      var pickPM = document.querySelector(".pickPM");
      var pickAIM = document.querySelector(".pickAIM");

      updateScoreElement();

      /*
      same as defult operator 
      if (score === null) {
        score = {
          Wins: 0,
          Losses: 0,
          Ties: 0,
        };
      } */

      function pickAiMove() {
        const randomNumber = Math.random();
        let aiMove = "";
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          aiMove = "rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          aiMove = "paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          aiMove = "scissors";
        }
        return aiMove;
      }
      function playerGame(playerMove) {
        const aiMove = pickAiMove();
        console.log(aiMove);
        if (playerMove === "scissors") {
          if (aiMove === "rock") {
            result = "You lose.";
          } else if (aiMove === "paper") {
            result = "You win.";
          } else if (aiMove === "scissors") {
            result = "Tie.";
          }
        } else if (playerMove === "rock") {
          if (aiMove === "rock") {
            result = "Tie.";
          } else if (aiMove === "paper") {
            result = "You lose.";
          } else if (aiMove === "scissors") {
            result = "You win.";
          }
        } else if (playerMove === "paper") {
          if (aiMove === "rock") {
            result = "You win.";
          } else if (aiMove === "paper") {
            result = "Tie.";
          } else if (aiMove === "scissors") {
            result = "You lose.";
          }
        }

        if (result === "You win.") {
          score.Wins += 1;
        } else if (result === "You lose.") {
          score.Losses += 1;
        } else if (result === "Tie.") {
          score.Ties += 1;
        }
        localStorage.setItem("scoreBoard", JSON.stringify(score));
        updateScoreElement();
        updateResultElement();
        updateMovementElement();

        /*alert(
          `you picked ${playerMove} . computer picked ${aiMove}. ${result}\nWins: ${score.Wins} | Losses: ${score.Losses} | Ties: ${score.Ties} `
          );*/
        // function updateMovementElement () {
        //   document.querySelector('.js-movement').innerHTML = `You ${playerMove} - ${aiMove} Computer`;
        // }
        function updateMovementElement() {
          const result = document.querySelector(".js-movement")
          result.innerHTML = `you <img src="img/${playerMove}-emoji.png" class="pickPM"> <img src="img/${aiMove}-emoji.png" class="pickAIM"> computer`;
        }
        // function updateMovementElement () {
        //   document.querySelector('.js-movement').innerHTML = `You ${pickPM} - ${pickAIM} Computer`;
        // }
      }
      function updateScoreElement() {
        document.querySelector(
          ".js-score"
        ).innerHTML = `Wins: ${score.Wins} | Losses: ${score.Losses} | Ties: ${score.Ties}`;
      }
      function updateResultElement() {
        document.querySelector(".js-result").innerHTML = `${result}`;
      }
