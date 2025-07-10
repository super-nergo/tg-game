const secretNumber = Math.floor(Math.random() * 100) + 1;
const tg = window.Telegram.WebApp;

document.getElementById("checkBtn").addEventListener("click", () => {
  const userGuess = parseInt(document.getElementById("userGuess").value);
  const result = document.getElementById("result");

  if (isNaN(userGuess)) {
    result.textContent = "Введите число!";
    return;
  }

  if (userGuess < 1 || userGuess > 100) {
    result.textContent = "Число должно быть от 1 до 100!";
    return;
  }

  if (userGuess === secretNumber) {
    result.textContent = "🎉 Вы угадали!";
    tg.sendData(JSON.stringify({ win: true, number: secretNumber })); // Отправка данных в бота
  } else if (userGuess < secretNumber) {
    result.textContent = "🔼 Больше!";
  } else {
    result.textContent = "🔽 Меньше!";
  }
});
