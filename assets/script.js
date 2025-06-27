function refine() {
  const raw = document.getElementById('config').value;
  document.getElementById('output').textContent = "Refined: " + raw.trim();
}
