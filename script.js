const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function tutupSemuaSubMenu() {
    document.querySelectorAll('.has-dropdown.open').forEach((item) => {
        item.classList.remove('open');
        const tombol = item.querySelector('.sub-toggle');
        if (tombol) {
            tombol.setAttribute('aria-expanded', 'false');
        }
    });
}

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute(
            'aria-label',
            isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'
        );
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.setAttribute('aria-label', 'Buka menu navigasi');
            tutupSemuaSubMenu();
        });
    });
}

document.querySelectorAll('.sub-toggle').forEach((tombol) => {
    tombol.addEventListener('click', () => {
        const item = tombol.closest('.has-dropdown');
        const sedangBuka = item.classList.contains('open');

        tutupSemuaSubMenu();

        if (!sedangBuka) {
            item.classList.add('open');
            tombol.setAttribute('aria-expanded', 'true');
        }
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.has-dropdown')) {
        tutupSemuaSubMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        tutupSemuaSubMenu();
    }
});

const currentYear = document.getElementById('currentYear');
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const pesan = document.getElementById('pesan').value.trim();

        const subject = encodeURIComponent('Pesan dari website Luxury Parfume');
        const body = encodeURIComponent(
            `Nama: ${nama}\nEmail: ${email}\n\nPesan:\n${pesan}`
        );

        window.location.href = `mailto:luxuryparfume@gmail.com?subject=${subject}&body=${body}`;
    });
}
