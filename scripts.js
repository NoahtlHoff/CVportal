window.addEventListener("DOMContentLoaded", () => {
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


  const dropdownLinks = document.querySelectorAll('.dropdown > a');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 1000) {
        const parent = this.parentElement;
        if (!parent.classList.contains('active')) {
          e.preventDefault();
          parent.classList.add('active');
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function (event) {
      if (event.target.closest('.download-link, .btn')) {
        return;
      }
      const targetUrl = card.getAttribute('data-href');
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    });
  });

  document.querySelectorAll('.download-link').forEach(link => {
    link.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const secretCode = "oboy";
  let typedKeys = "";

  document.addEventListener("keydown", function (event) {
    typedKeys += event.key;
    
    if (typedKeys.length > secretCode.length) {
      typedKeys = typedKeys.slice(-secretCode.length);
    }
    
    if (typedKeys === secretCode) {
      visaModal();
      typedKeys = "";
    }
  });

  function visaModal() {
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "modal-overlay";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const closeButton = document.createElement("button");
    closeButton.textContent = "NOG MED CHOKLADMJÖLK!";
    closeButton.className = "modal-close";
    closeButton.addEventListener("click", function () {
      document.body.removeChild(modalOverlay);
    });
    
    const message = document.createElement("p");
    message.textContent = "O'boy lanserades redan 1960 och har sedan dess varit Nordens populäraste chokladdryck. Den härliga chokladsmaken njuts av folket såväl varm som kall och såväl vid frukost som vid andra tillfällen. År 1995 köptes O'boy upp av det globala företaget Kraft Foods, numera Mondelēz International, som bland annat äger varumärken som Marabou, V6, Stimorol, Belvita och Oreo. Produktionen av O'boy sker idag i Marabou-fabriken i Upplands Väsby utanför Stockholm.";
    
    modalContent.appendChild(message);
    modalContent.appendChild(closeButton);
    modalOverlay.appendChild(modalContent);
    
    document.body.appendChild(modalOverlay);
  }
});