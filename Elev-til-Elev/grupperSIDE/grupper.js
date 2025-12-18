// DROPDOWN NAV
const dropdown = document.querySelector(".dropdown");
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownBtn.addEventListener("click", e=>{
  e.stopPropagation();
  dropdown.classList.toggle("open");
});
document.addEventListener("click", ()=>dropdown.classList.remove("open"));
dropdownMenu.addEventListener("click", e=>e.stopPropagation());

// FILTER DROPDOWN
const lineFilter = document.getElementById("lineFilter");
const cards = document.querySelectorAll(".group-card");

lineFilter.addEventListener("change", () => {
    const filter = lineFilter.value;

    cards.forEach(card => {
        card.style.display =
            filter === "all" || card.dataset.category === filter
                ? "block"
                : "none";
    });
});

// SØK
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(value) ? "block" : "none";
    });
});


// --- AUTO-FILTER BASERT PÅ URL ?filter= ---
const urlParams = new URLSearchParams(window.location.search);
const autoFilter = urlParams.get("filter");

if (autoFilter) {
    // Sett dropdown-feltet lik filterverdien
    lineFilter.value = autoFilter;

    // Skjul/vis riktige kort
    cards.forEach(card => {
        card.style.display =
            card.dataset.category === autoFilter ? "block" : "none";
    });
}