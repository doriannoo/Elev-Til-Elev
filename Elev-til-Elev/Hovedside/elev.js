// ------------------- DROPDOWN FIX --------------------
const dropdown = document.querySelector(".dropdown");
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Safety: only attach if elements exist
if (dropdown && dropdownBtn && dropdownMenu) {
  // Toggle dropdown når man klikker
  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  // Lukk dropdown når man klikker andre steder
  document.addEventListener("click", () => {
    dropdown.classList.remove("open");
  });

  // Hindrer dropdown fra å lukke når man klikker inni menyen
  dropdownMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

// ------------------- ACCORDION FUNKSJON --------------------
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.parentElement;
    card.classList.toggle('active');
  });
});

// ------------------- SMOOTH SCROLL TIL ANCHORS --------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        // Only handle internal anchors (keep external links / ?filter links working)
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});