// ===== SCROLL FADE-UP ANIMATION =====
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

// ===== MOBILE MENU TOGGLE =====
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.borderBottomColor = '#39FF14';
    navbar.style.borderBottomWidth = '1px';
  } else {
    navbar.style.borderBottomColor = '#2a2a2a';
  }
});

// ===== LIGHTBOX FUNCTIONALITY =====
function openLightbox(imgElement) {
  let lightbox = document.getElementById('lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.onclick = closeLightbox;
    const img = document.createElement('img');
    img.id = 'lightbox-img';
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);
  }
  const lightboxImg = lightbox.querySelector('img');
  lightboxImg.src = imgElement.src;
  lightboxImg.alt = imgElement.alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

