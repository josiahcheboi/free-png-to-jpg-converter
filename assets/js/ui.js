// ui.js - Handles UI interactions
document.getElementById('convertBtn').addEventListener('click', () => {
  const fileInput = document.getElementById('fileInput');
  if (!fileInput.files.length) {
    alert('Please upload a file first.');
    return;
  }
  convertImage(fileInput.files[0]);
});

document.getElementById('downloadBtn').addEventListener('click', () => {
  clearFileInput();
});

function clearFileInput() {
  document.getElementById('fileInput').value = '';
  document.getElementById('preview').innerHTML = '';
  document.getElementById('downloadSection').style.display = 'none';
}

// Highlight active nav link on scroll
const sections = document.querySelectorAll("main section, .upload-section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Keep active highlight when clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
