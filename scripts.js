window.addEventListener("DOMContentLoaded", () => {
  // Existing theme toggle code…
  const themeToggleCheckbox = document.getElementById("themeToggleCheckbox");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggleCheckbox.checked = true;
  }
  else if(savedTheme === "party") {
    document.body.classList.add("party-mode");
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

  themeToggleCheckboxeaseregg.addEventListener("change", () => {
    if (themeToggleCheckboxeaseregg.checked) {
      document.body.classList.add("party-mode");
      localStorage.setItem("theme", "party");
    } else {
      document.body.classList.remove("party-mode");
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

document.addEventListener("DOMContentLoaded", function () {
  // Add click event listeners to all cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function (event) {
      // If the click originated on a download link, do nothing
      if (event.target.closest('.download-link, .btn')) {
        return;
      }
      const targetUrl = card.getAttribute('data-href');
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    });
  });

  // Prevent click events on download links from bubbling up to the card
  document.querySelectorAll('.download-link').forEach(link => {
    link.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const secretCode = "oboy";
  let typedKeys = "";

  // Lyssna på alla tangenttryckningar
  document.addEventListener("keydown", function (event) {
    // Lägg till den tryckta tangenten i vår sträng
    typedKeys += event.key;
    
    // Om längden blir längre än secretCode, behåll bara de senaste tecknen
    if (typedKeys.length > secretCode.length) {
      typedKeys = typedKeys.slice(-secretCode.length);
    }
    
    // Kolla om den inmatade strängen matchar vårt hemliga kodord
    if (typedKeys === secretCode) {
      visaModal();
      typedKeys = ""; // Nollställ för framtida inmatningar
    }
  });

  // Funktion för att skapa och visa en modal popup
  function visaModal() {
    // Skapa modal-overlay
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "modal-overlay";
    
    // Skapa modal-innehåll
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    
    // Skapa stäng-knapp
    const closeButton = document.createElement("button");
    closeButton.textContent = "NOG MED CHOKLADMJÖLK!";
    closeButton.className = "modal-close";
    closeButton.addEventListener("click", function () {
      document.body.removeChild(modalOverlay);
    });
    
    // Skapa meddelandetext
    const message = document.createElement("p");
    message.textContent = "O'boy lanserades redan 1960 och har sedan dess varit Nordens populäraste chokladdryck. Den härliga chokladsmaken njuts av folket såväl varm som kall och såväl vid frukost som vid andra tillfällen. År 1995 köptes O'boy upp av det globala företaget Kraft Foods, numera Mondelēz International, som bland annat äger varumärken som Marabou, V6, Stimorol, Belvita och Oreo. Produktionen av O'boy sker idag i Marabou-fabriken i Upplands Väsby utanför Stockholm.";
    
    // Sätt ihop modalen
    modalContent.appendChild(message);
    modalContent.appendChild(closeButton);
    modalOverlay.appendChild(modalContent);
    
    // Lägg till modalen i dokumentet
    document.body.appendChild(modalOverlay);
  }
});