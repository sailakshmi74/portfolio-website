
["hero", "about", "projects", "contact"].forEach(id => {
  fetch(`components/${id}.html`)
    .then(res => res.text())
    .then(html => document.getElementById(id).innerHTML = html);
});


window.addEventListener('load', () => {
  const canvas = document.getElementById('three-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x00ff99 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2, 2, 5).normalize();
  scene.add(light);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    controls.update();
  }
  animate();
});
// Form Validation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const msgBox = document.getElementById('form-msg');

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }

      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Simulate success
      msgBox.classList.remove('hidden');
      form.reset();
    });
  }
});

