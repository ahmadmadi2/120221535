// تبديل القائمة في الجوال
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const profileSidebar = document.getElementById('profileSidebar');

mobileMenuBtn.addEventListener('click', () => {
    profileSidebar.classList.toggle('sidebar-open');
});

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', (e) => {
    if (!profileSidebar.contains(e.target) && e.target !== mobileMenuBtn) {
        profileSidebar.classList.remove('sidebar-open');
    }
});

// تبديل الوضع الليلي
const themeBtn = document.getElementById('themeBtn');
const themeIcon = themeBtn.querySelector('i');

// التحقق من الوضع المحفوظ
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('darkk');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('darkk');
    const isDark = document.body.classList.contains('darkk');
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    if (isDark) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});

// تمييز الرابط النشط
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// زر العودة للأعلى
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// كود تبديل اللغة (يمكن إضافته لاحقاً)
const languageBtn = document.getElementById('languageBtn');
languageBtn.addEventListener('click', () => {
    // كود تبديل اللغة
});

// كود إرسال النموذج
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // كود إرسال النموذج
        alert('Message sent successfully!');
        contactForm.reset();
    });
}