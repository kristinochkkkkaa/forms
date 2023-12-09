const label = document.querySelector(".label");

function updateTheme(theme) {
  document.documentElement.setAttribute("color-scheme", theme);
  label.textContent = theme[0].toUpperCase() + theme.slice(1);
}
