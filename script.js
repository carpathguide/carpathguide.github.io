const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const newsletterForm = document.querySelector(".newsletter-form");
const contactForm = document.querySelector(".contact-form");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("تم تسجيل البريد في النسخة التجريبية. اربط خدمة نشرات بريدية عند نشر الموقع.");
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("النموذج جاهز للتصميم. عند نشر الموقع اربطه ببريدك أو خدمة استقبال رسائل.");
  });
}
