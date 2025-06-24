const searchField = document.getElementById('searchField');
const sortSelect = document.getElementById('sortSelect');
const catalog = document.querySelector('.items');
const items = Array.from(document.querySelectorAll('.item'));

searchField.addEventListener('input', () => {
  const query = searchField.value.toLowerCase();

  items.forEach(item => {
    const title = item.querySelector('h3').textContent.toLowerCase();
    const description = item.querySelector('p').textContent.toLowerCase();

    if (title.includes(query) || description.includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});

sortSelect.addEventListener('change', () => {
  const visibleItems = items.filter(item => item.style.display !== 'none');

  let sortedItems = [...visibleItems];

  if (sortSelect.value === 'title') {
    sortedItems.sort((a, b) => {
      const titleA = a.querySelector('h3').textContent.toLowerCase();
      const titleB = b.querySelector('h3').textContent.toLowerCase();
      return titleA.localeCompare(titleB);
    });
  } else if (sortSelect.value === 'rating') {
    sortedItems.sort((a, b) => {
      const ratingA = +a.dataset.rating || 0;
      const ratingB = +b.dataset.rating || 0;
      return ratingB - ratingA;
    });
  }

  sortedItems.forEach(item => catalog.appendChild(item));
});

// === ПАГИНАЦИЯ ===

const itemsPerPage = 2;
let currentPage = 1;
const allItems = Array.from(document.querySelectorAll('.item'));
const paginationContainer = document.querySelector('.pagination');

function showPage(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  allItems.forEach((item, index) => {
    item.style.display = (index >= start && index < end) ? "block" : "none";
  });

  currentPage = page;
  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = (i === currentPage) ? "active-page" : "";
    btn.addEventListener('click', () => showPage(i));
    paginationContainer.appendChild(btn);
  }
}

// Инициализация
showPage(1);
