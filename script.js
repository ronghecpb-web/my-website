const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.elements.name.value.trim();
    if (!name) return;
    alert(`謝謝您，${name}！\n目前網站為展示版本，表單尚未串接後端。\n之後可以再接 Email、LINE、Google 表單或資料庫。`);
    this.reset();
  });
}
