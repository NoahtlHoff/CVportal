window.addEventListener("DOMContentLoaded", () => {
  // Existing theme toggle code…
  const themeToggleCheckbox = document.getElementById("themeToggleCheckbox");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggleCheckbox.checked = true;
  }

  themeToggleCheckbox.addEventListener("change", () => {
    if (themeToggleCheckbox.checked) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  });

  // --- New Code: Clickable Dropdown for Mobile with Double-Click Behavior ---
  const dropdownLinks = document.querySelectorAll('.dropdown > a');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 1000) { // Only on small screens
        const parent = this.parentElement;
        if (!parent.classList.contains('active')) {
          // First tap: open the dropdown
          e.preventDefault();           // Prevent immediate navigation
          parent.classList.add('active'); // Open the dropdown
        }
        // If already open (active), allow the link click to proceed normally.
      }
    });
  });
});
