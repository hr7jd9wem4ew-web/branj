    // ---------------------Calculator-------------------
    
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const result = document.getElementById("rezultcalc");

    function calc(operation) {
        const n1 = parseFloat(num1.value);
        const n2 = parseFloat(num2.value);

        if (isNaN(n1) || isNaN(n2)) {
            result.textContent = "Результат: введіть числа!";
            return;
        }

        let rez;
        switch (operation) {
            case "+": rez = n1 + n2; break;
            case "-": rez = n1 - n2; break;
            case "*": rez = n1 * n2; break;
            case "/": 
                rez = n2 !== 0 ? n1 / n2 : "Ділення на 0 не можливе!";
                break;
        }

        result.textContent = `Результат: ${rez}`;
    }
    document.getElementById("btn1").addEventListener("click", () => calc("+"));
    document.getElementById("btn2").addEventListener("click", () => calc("-"));
    document.getElementById("btn3").addEventListener("click", () => calc("*"));
    document.getElementById("btn4").addEventListener("click", () => calc("/"));
    document.getElementById("btn5").addEventListener("click", () => {
        num1.value = "";
        num2.value = "";
        result.textContent = "Результат: ";
    });

// ---------------------Vgaday 100-------------------

let secret = Math.floor(Math.random() * 100) + 1;
    let tries = 0;

    const input = document.getElementById('inpvgaday');
    const btnGuess = document.getElementById('vgad');
    const btnNew = document.getElementById('nova');
    const vidpovid = document.getElementById('rezultvgaday');
    const attempts = document.getElementById('rezultsprob');

    btnGuess.addEventListener('click', () => {
      const val = parseInt(input.value);
      if (isNaN(val) || val < 1 || val > 100) {
        vidpovid.textContent = 'Результат: введіть число від 1 до 100.';
        return;
      }

      tries++;
      attempts.textContent = 'Спроб: ' + tries;

      if (val === secret) {
        vidpovid.textContent = 'УРАААА! Ви вгадали число ' + secret + '!';
        input.disabled = true;
        btnGuess.disabled = true;
      } else if (val < secret) {
        vidpovid.textContent = 'Результат: надто мале число!';
      } else {
        vidpovid.textContent = 'Результат: надто велике число!';
      }
    });

    btnNew.addEventListener('click', () => {
      secret = Math.floor(Math.random() * 100) + 1;
      tries = 0;
      input.value = '';
      input.disabled = false;
      btnGuess.disabled = false;
      vidpovid.textContent = 'Результат:';
      attempts.textContent = 'Спроб: 0';
    });

    // ---------------------Igra-------------------

    const btnRock = document.getElementById('rock');
    const btnPaper = document.getElementById('paper');
    const btnScissors = document.getElementById('scissors');
    const rez = document.getElementById('igrarez');
    const rah = document.getElementById('igrarah');
    const newGame = document.getElementById('newgame');

    let userScore = 0;
    let compScore = 0;

    const choices = {
      rock: 'Камінь',
      paper: 'Ножиці',
      scissors: 'Папір'
    };

    function computerChoice() {
      const arr = ['rock', 'paper', 'scissors'];
      const rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
    }

    function playRound(userSelect) {
      const compSelect = computerChoice();

      if (userSelect === compSelect) {
        rez.textContent = `Результат: Нічия! Комп'ютер вибрав ${choices[compSelect]}.`;
      } else if (
        (userSelect === 'rock' && compSelect === 'scissors') ||
        (userSelect === 'paper' && compSelect === 'rock') ||
        (userSelect === 'scissors' && compSelect === 'paper')
      ) {
        userScore++;
        rez.textContent = `Результат: Ви виграли! Комп'ютер вибрав ${choices[compSelect]}.`;
      } else {
        compScore++;
        rez.textContent = `Результат: Ви програли! Комп'ютер вибрав ${choices[compSelect]}.`;
      }

      rah.textContent = `Рахунок: Ви: ${userScore} Комп'ютер: ${compScore}`;
    }

    btnRock.addEventListener('click', () => playRound('rock'));
    btnPaper.addEventListener('click', () => playRound('paper'));
    btnScissors.addEventListener('click', () => playRound('scissors'));

    newGame.addEventListener('click', () => {
      userScore = 0;
      compScore = 0;
      rez.textContent = 'Результат:';
      rah.textContent = 'Рахунок: 0 : 0';
    });

    // ---------------------Max Min-------------------

    const firstInput = document.getElementById('num5');
    const secondInput = document.getElementById('num6');
    const compareBtn = document.getElementById('maxminporiv');
    const resultText = document.getElementById('maxminrez');

    compareBtn.addEventListener('click', () => {
      const firstNum = parseFloat(firstInput.value);
      const secondNum = parseFloat(secondInput.value);

      if (isNaN(firstNum) || isNaN(secondNum)) {
        resultText.textContent = 'Результат: введіть два числа!';
        return;
      }

      if (firstNum > secondNum) {
        resultText.textContent = `Результат: ${firstNum} більше за ${secondNum}`;
      } else if (firstNum < secondNum) {
        resultText.textContent = `Результат: ${secondNum} більше за ${firstNum}`;
      } else {
        resultText.textContent = `Результат: числа рівні (${firstNum} = ${secondNum})`;
      }
    });