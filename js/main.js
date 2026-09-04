/**
 * Tenurima™ — Main Interactive Logic
 */
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initTestimonialsSlider();
  initFaqAccordions();
  initSmoothScroll();
  initPricingButtons();
});

function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;
  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('bg-[#1a0205]/95', 'shadow-xl', 'shadow-black/60', 'backdrop-blur-md', 'py-3');
      header.classList.remove('bg-transparent', 'py-5');
    } else {
      header.classList.remove('bg-[#1a0205]/95', 'shadow-xl', 'shadow-black/60', 'backdrop-blur-md', 'py-3');
      header.classList.add('bg-transparent', 'py-5');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const btnToggle = document.getElementById('mobile-menu-btn');
  const btnClose = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!btnToggle || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('opacity-100'), 10);
    document.body.classList.add('overflow-hidden');
  };

  const closeDrawer = () => {
    drawer.classList.add('translate-x-full');
    overlay.classList.remove('opacity-100');
    setTimeout(() => {
      overlay.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 300);
  };

  btnToggle.addEventListener('click', openDrawer);
  if (btnClose) btnClose.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

function initTestimonialsSlider() {
  const track = document.getElementById('testimonials-track');
  const btnPrev = document.getElementById('testimonial-prev');
  const btnNext = document.getElementById('testimonial-next');
  if (!track || !btnPrev || !btnNext) return;

  const slides = track.querySelectorAll('.testimonial-slide');
  if (slides.length === 0) return;

  let currentIndex = 0;
  const getVisibleCount = () => (window.innerWidth >= 768 ? 2 : 1);

  const updateSlider = () => {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, slides.length - visibleCount);
    currentIndex = Math.min(Math.max(0, currentIndex), maxIndex);

    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = 24;
    const offset = currentIndex * (slideWidth + gap);

    track.style.transform = `translateX(-${offset}px)`;

    btnPrev.style.opacity = currentIndex === 0 ? '0.4' : '1';
    btnPrev.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';

    btnNext.style.opacity = currentIndex >= maxIndex ? '0.4' : '1';
    btnNext.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'auto';
  };

  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  btnNext.addEventListener('click', () => {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, slides.length - visibleCount);
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  // Touch Swipe support
  let startX = 0;
  track.addEventListener('touchstart', e => {
    startX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].screenX;
    if (startX - endX > 40) {
      const visibleCount = getVisibleCount();
      const maxIndex = Math.max(0, slides.length - visibleCount);
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
      }
    } else if (endX - startX > 40) {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    }
  }, { passive: true });

  window.addEventListener('resize', updateSlider, { passive: true });
  updateSlider();
}

function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item, idx) => {
    const header = item.querySelector('.faq-header');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');
    if (!header || !content) return;

    header.addEventListener('click', () => {
      const isHidden = content.classList.contains('hidden');

      // close all
      faqItems.forEach(other => {
        const oContent = other.querySelector('.faq-content');
        const oIcon = other.querySelector('.faq-icon');
        const oHeader = other.querySelector('.faq-header');
        if (oContent) oContent.classList.add('hidden');
        if (oIcon) oIcon.classList.remove('rotate-180');
        if (oHeader) {
          oHeader.classList.remove('bg-[#c53030]', 'text-white');
          oHeader.classList.add('bg-white', 'text-gray-900');
        }
      });

      if (isHidden) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
        header.classList.remove('bg-white', 'text-gray-900');
        header.classList.add('bg-[#c53030]', 'text-white');
      }
    });

    if (idx === 0) {
      content.classList.remove('hidden');
      if (icon) icon.classList.add('rotate-180');
      header.classList.remove('bg-white', 'text-gray-900');
      header.classList.add('bg-[#c53030]', 'text-white');
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const pos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    });
  });
}

function initPricingButtons() {
  document.querySelectorAll('.buy-now-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const origText = btn.innerHTML;
      btn.innerHTML = '<span class="text-sm uppercase tracking-wider font-bold">✓ Adding to Cart...</span>';
      setTimeout(() => {
        btn.innerHTML = origText;
        const modal = document.getElementById('checkout-modal');
        if (modal) {
          modal.classList.remove('hidden');
          setTimeout(() => modal.classList.add('opacity-100'), 10);
        }
      }, 600);
    });
  });

  const modalClose = document.getElementById('modal-close');
  const modal = document.getElementById('checkout-modal');
  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.remove('opacity-100');
      setTimeout(() => modal.classList.add('hidden'), 200);
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('opacity-100');
        setTimeout(() => modal.classList.add('hidden'), 200);
      }
    });
  }
}
