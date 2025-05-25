let currentTheme = 1;
function switchTheme() {
  document.body.classList.remove(`theme-${currentTheme}`);
  currentTheme = currentTheme % 3 + 1;
  document.body.classList.add(`theme-${currentTheme}`);
}

// Scroll-triggered animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".section").forEach(section => {
  observer.observe(section);
});
