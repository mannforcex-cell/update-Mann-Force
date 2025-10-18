 // Efek glow ikut pergerakan tetikus (mengubah latar belakang body)
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.body.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #150000, #000)`;
});

// Efek glitch kecil pada tajuk (menambah/membuang kelas 'glitch')
const title = document.querySelector(".title");
setInterval(() => {
  title.classList.toggle("glitch");
}, 4000); // Bertukar setiap 4 saat
