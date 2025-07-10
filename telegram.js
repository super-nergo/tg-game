<<<<<<< HEAD
const tg = window.Telegram.WebApp;

// Инициализация и настройки
tg.ready();
tg.expand(); // Полноэкранный режим
tg.enableClosingConfirmation(); // Подтверждение перед закрытием

// Кнопка закрытия
document.getElementById('closeBtn').addEventListener('click', () => {
  tg.close();
});

// Можно использовать данные пользователя
const user = tg.initDataUnsafe.user;
if (user) {
  console.log(`Привет, ${user.first_name}!`);
}
=======
// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand(); // Развернуть на весь экран

console.log("Пользователь Telegram:", tg.initDataUnsafe?.user?.username || "неизвестен");
>>>>>>> 3b81423d9ff5b7da2890724e63b5fa9ec8f73019
