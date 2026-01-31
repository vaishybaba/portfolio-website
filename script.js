let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

function setActive(id) {
  navLinks.forEach(link => link.classList.remove("active"));
  const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
  if (activeLink) activeLink.classList.add("active");
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowH = window.innerHeight;
  const docH = document.documentElement.scrollHeight;

  if (scrollTop + windowH >= docH - 5) {
    setActive("contact");
    return;
  }

  const marker = scrollTop + windowH / 2;

  for (const sec of sections) {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (marker >= top && marker < bottom) {
      setActive(id);
      break;
    }
  }
});

window.dispatchEvent(new Event("scroll"));

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







