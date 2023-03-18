const openFiltersBtn = document.querySelector('.filters-btn');
const filterChevron = document.querySelector('.fa-chevron-right');
const filterContainer = document.querySelector('.filter-sort-container');

openFiltersBtn.addEventListener('click', toggleFilters);

function toggleFilters() {
  filterContainer.classList.toggle('closed');
  filterChevron.classList.toggle('rotate');
}