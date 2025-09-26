(function () {
  const canvas = document.getElementById("codeRain");
  const ctx = canvas.getContext("2d");

  // Başlangıç boyutu
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const fontSize = 16;
  let columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(0);

  function draw() {
    const isDark = document.documentElement.classList.contains("dark");

    // Arka plan temizleme
    ctx.fillStyle = isDark
      ? "rgba(0, 0, 0, 0.15)"
      : "rgba(255, 255, 255, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Yazı rengi
    ctx.fillStyle = isDark
      ? (Math.random() > 0.9 ? "#A020F0" : "#10b981") // mor / yeşil
      : (Math.random() > 0.9 ? "" : "#0ea5e9"); // mavi / cyan
    ctx.font = fontSize + "px monospace";

    // Her sütun için çizim
    drops.forEach((y, x) => {
      const text = String.fromCharCode(33 + Math.random() * 94); // random ascii
      ctx.fillText(text, x * fontSize, y * fontSize);

      if (y * fontSize > canvas.height && Math.random() > 0.975) {
        drops[x] = 0;
      }
      drops[x]++;
    });
  }

  setInterval(draw, 40);
})();
