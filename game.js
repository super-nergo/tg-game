<<<<<<< HEAD
// Генерируем случайное число от 1 до 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("checkBtn").addEventListener("click", () => {
  const userGuess = parseInt(document.getElementById("userGuess").value);
  const result = document.getElementById("result");

  if (isNaN(userGuess)) {
    result.textContent = "Введите корректное число!";
    return;
  }

  if (userGuess < 1 || userGuess > 100) {
    result.textContent = "Число должно быть от 1 до 100!";
    return;
  }

  if (userGuess === secretNumber) {
    result.textContent = "🎉 Поздравляем! Вы угадали!";
  } else if (userGuess < secretNumber) {
    result.textContent = "🔼 Больше!";
  } else {
    result.textContent = "🔽 Меньше!";
  }
});
=======
// Генерируем случайное число от 1 до 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("checkBtn").addEventListener("click", () => {
  const userGuess = parseInt(document.getElementById("userGuess").value);
  const result = document.getElementById("result");

  if (isNaN(userGuess)) {
    result.textContent = "Введите корректное число!";
    return;
  }

  if (userGuess < 1 || userGuess > 100) {
    result.textContent = "Число должно быть от 1 до 100!";
    return;
  }

  if (userGuess === secretNumber) {
    result.textContent = "🎉 Поздравляем! Вы угадали!";
  } else if (userGuess < secretNumber) {
    result.textContent = "🔼 Больше!";
  } else {
    result.textContent = "🔽 Меньше!";
  }
});
>>>>>>> 3b81423d9ff5b7da2890724e63b5fa9ec8f73019
