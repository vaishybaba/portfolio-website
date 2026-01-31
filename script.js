let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(`.navbar a[href*="${id}"]`).classList.add("active");
            });
        }
    });
};

const readMoreBtns = document.querySelectorAll(".read-more");
readMoreBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const projectBox = btn.closest(".project-box");
        const fullText = projectBox.querySelector(".full-text");

        if (fullText.style.display === "block") {
            fullText.style.display = "none";
            btn.textContent = "Read More";
        } else {
            fullText.style.display = "block";
            btn.textContent = "Read Less";
        }
    });
});

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    toggleBtn.textContent = 
        document.body.classList.contains("light") ? "☀️" : "🌙";
});

const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function(e){
  e.preventDefault();
  const btn = form.querySelector("button");
  btn.disabled = true;
  btn.textContent = "Sending...";

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    btn.disabled = false;
    btn.textContent = "Send Message";
    form.reset();
  }, 2000);
});



