const form = document.getElementById('contactForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nameValue || !emailValue || !messageValue) {
    formMessage.textContent = 'Пожалуйста, заполните все поля.';
    formMessage.style.color = 'red';
    return;
  }

  if (!emailPattern.test(emailValue)) {
    formMessage.textContent = 'Введите корректный email.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = 'Сообщение успешно отправлено!';
  formMessage.style.color = 'green';
  form.reset();
});
