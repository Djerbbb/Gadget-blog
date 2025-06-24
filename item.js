// === Переключение основного изображения ===
const mainImg = document.querySelector('.main-img');
const thumbnails = document.querySelectorAll('.thumbnails img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    mainImg.src = thumbnail.src;
  });
});

// === Работа с отзывами и localStorage ===
const form = document.getElementById('reviewForm');
const nameInput = document.getElementById('reviewName');
const textInput = document.getElementById('reviewText');
const reviewsContainer = document.querySelector('.reviews');

function loadReviews() {
  const saved = JSON.parse(localStorage.getItem('reviews-x200')) || [];
  saved.forEach(r => {
    const div = document.createElement('div');
    div.classList.add('review');
    div.innerHTML = `<p><strong>${r.name}:</strong> ${r.text}</p>`;
    reviewsContainer.appendChild(div);
  });
}

function saveReview(name, text) {
  const newReview = { name, text };
  const existing = JSON.parse(localStorage.getItem('reviews-x200')) || [];
  existing.push(newReview);
  localStorage.setItem('reviews-x200', JSON.stringify(existing));
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const text = textInput.value.trim();
  if (!name || !text) return;

  saveReview(name, text);

  const div = document.createElement('div');
  div.classList.add('review');
  div.innerHTML = `<p><strong>${name}:</strong> ${text}</p>`;
  reviewsContainer.appendChild(div);

  form.reset();
});

// Загрузка при открытии страницы
loadReviews();
