const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

function setActiveFilter(activeButton) {
  filterButtons.forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function filterProjects(filter) {
  projectCards.forEach((card) => {
    const categories = (card.dataset.category || '').split(' ');
    card.classList.toggle('hidden', filter !== 'all' && !categories.includes(filter));
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    setActiveFilter(button);
    filterProjects(filter);
  });
});

const initialActiveFilter = document.querySelector('.filter-btn.active') || filterButtons[0];

if (initialActiveFilter) {
  setActiveFilter(initialActiveFilter);
  filterProjects(initialActiveFilter.dataset.filter || 'all');
}
