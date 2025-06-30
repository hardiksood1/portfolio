const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

function showModal(project) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const projects = {
    ocr: `<h3>Medical OCR</h3><p>Multilingual OCR with numeral normalization and summarization.</p><ul><li>Tools: Python, Tesseract, AWS</li></ul>`,
    product: `<h3>Product Intelligence</h3><p>LLM-based product metadata generation for e-commerce.</p><ul><li>Tools: Flask, Vision Transformers, GCP</li></ul>`,
    vehicle: `<h3>Vehicle Monitoring</h3><p>Live vehicle detection, speed tracking, and ALPR system.</p><ul><li>Tools: YOLO, OpenCV, Docker</li></ul>`
  };
  modalBody.innerHTML = projects[project] || `<p>No info available.</p>`;
  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('projectModal').classList.add('hidden');
}
