const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
link.addEventListener('click', () => {
hamburger.classList.remove('active');
navMenu.classList.remove('active');
});
});
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
});
});

window.addEventListener('scroll', () => {
const navbar = document.querySelector('.navbar');
if (window.scrollY > 100) {
navbar.style.background = 'rgba(15, 23, 42, 0.98)';
} else {
navbar.style.background = 'rgba(15, 23, 42, 0.95)';
}
});

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
btn.addEventListener('click', () => {
const tabId = btn.getAttribute('data-tab');

tabBtns.forEach(b => b.classList.remove('active'));
tabContents.forEach(c => c.classList.remove('active'));

btn.classList.add('active');
const targetContent = document.getElementById(tabId);
if (targetContent) {
targetContent.classList.add('active');
}
});
});

// Game Tabs Functionality (Players Page)
const gameTabs = document.querySelectorAll('.game-tab');
const gamePlayers = document.querySelectorAll('.game-players');

gameTabs.forEach(tab => {
tab.addEventListener('click', () => {
const gameId = tab.getAttribute('data-game');

// Remove active class from all tabs and players
gameTabs.forEach(t => t.classList.remove('active'));
gamePlayers.forEach(p => p.classList.remove('active'));

// Add active class to clicked tab and corresponding players
tab.classList.add('active');
const targetPlayers = document.getElementById(gameId);
if (targetPlayers) {
targetPlayers.classList.add('active');
}
});
});

// Animation on Scroll
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';
}
});
}, observerOptions);

// Observe elements
document.querySelectorAll('.team-card, .achievement-item, .player-card, .tournament-card').forEach(el => {
el.style.opacity = '0';
el.style.transform = 'translateY(20px)';
el.style.transition = 'all 0.6s ease';
observer.observe(el);
});

// Counter Animation
function animateCounter(element, target, duration = 2000) {
let start = 0;
const increment = target / (duration / 16);

const timer = setInterval(() => {
start += increment;
if (start >= target) {
element.textContent = target;
clearInterval(timer);
} else {
element.textContent = Math.floor(start);
}
}, 16);
}

// Animate stats when visible
const statsObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const statItems = entry.target.querySelectorAll('.stat-item h3');
statItems.forEach(stat => {
const text = stat.textContent;
const number = parseInt(text.replace(/\D/g, ''));
if (number) {
animateCounter(stat, number);
}
});
statsObserver.unobserve(entry.target);
}
});
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
statsObserver.observe(heroStats);
}

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
let current = '';
sections.forEach(section => {
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;
if (scrollY >= sectionTop - 200) {
current = section.getAttribute('id');
}
});

navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href') === `#${current}` || 
(current === '' && link.getAttribute('href') === 'index.html')) {
link.classList.add('active');
}
});
});

// Form Submission (if needed)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
form.addEventListener('submit', (e) => {
e.preventDefault();
// Add your form submission logic here
alert('تم الإرسال بنجاح!');
form.reset();
});
});

// Lazy Loading Images
if ('loading' in HTMLImageElement.prototype) {
const images = document.querySelectorAll('img[loading="lazy"]');
images.forEach(img => {
img.src = img.dataset.src;
});
} else {
// Fallback for browsers that don't support lazy loading
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
document.body.appendChild(script);
}

// Add loading attribute to images
document.querySelectorAll('img').forEach(img => {
if (!img.classList.contains('no-lazy')) {
img.setAttribute('loading', 'lazy');
}
});

// Console Welcome Message
console.log('%c🎮 Saudi Esports', 'color: #00d4aa; font-size: 24px; font-weight: bold;');
console.log('%cمرحبًا بك في موقع الرياضة الإلكترونية السعودية', 'color: #7c3aed; font-size: 14px;');
console.log('%cنحو الريادة العالمية في عالم الرياضات الإلكترونية', 'color: #64748b; font-size: 12px;');