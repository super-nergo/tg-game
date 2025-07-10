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
