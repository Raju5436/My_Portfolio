// === THEME TOGGLE ===
const toggleBtn = document.getElementById("themeToggle");
const htmlEl = document.documentElement;

toggleBtn.addEventListener("click", () => {
  const isDark = htmlEl.getAttribute("data-theme") === "dark";
  htmlEl.setAttribute("data-theme", isDark ? "light" : "dark");

  // Swap icon image (you can customise icon paths)
  toggleBtn.querySelector("img").src = isDark
    ? "moon-icon.png"
    : "sun-icon.png";
});


// === MOBILE MENU TOGGLE ===
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Optional: Close menu when clicking a link (mobile UX)
const navLinks = document.querySelectorAll("#navMenu a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});


const contactForm = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // ⛔ Stop default reload

  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      statusMsg.textContent = "Message sent successfully!";
      statusMsg.style.color = "green";
      contactForm.reset(); // ✅ Clear the form
    } else {
      statusMsg.textContent = "Error sending message. Please try again.";
      statusMsg.style.color = "red";
    }
  } catch (err) {
    statusMsg.textContent = "Network error.";
    statusMsg.style.color = "red";
  }
});
