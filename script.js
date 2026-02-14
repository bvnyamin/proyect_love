document.addEventListener("DOMContentLoaded", () => {
  // --- Configuración ---
  // FECHA DE INICIO DE LA RELACIÓN
  // Configurado para: 28 de Julio de 2025 a las 21:35
  // Esto hará que HOY (13 de Feb 2026 20:50) marque exactamente: 199 días, 23 horas, 15 min
  // Y seguirá contando hacia adelante sin reiniciarse al recargar.
  const startDate = new Date(2025, 6, 28, 21, 35); // Mes 6 = Julio (0-indexado)

  // --- Timer Logic ---
  function updateTimer() {
    const now = new Date();
    const difference = now - startDate;

    if (difference < 0) {
      // Future date case (countdown?) - or just show 0
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(
      2,
      "0",
    );
    document.getElementById("seconds").innerText = String(seconds).padStart(
      2,
      "0",
    );
  }

  setInterval(updateTimer, 1000);
  updateTimer(); // Initial call

  // --- Floating Hearts Logic ---
  const heartsContainer = document.getElementById("hearts-container");

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("pixel-heart");

    // Random Position
    heart.style.left = Math.random() * 100 + "vw";

    // Random Animation Duration (Speed)
    const duration = Math.random() * 5 + 5; // 5s to 10s
    heart.style.animationDuration = duration + "s";

    // Random Size with classes
    const sizeType = Math.random();
    if (sizeType < 0.3) {
      heart.classList.add("small");
    } else if (sizeType > 0.7) {
      heart.classList.add("large");
    }

    // Some hearts spin
    if (Math.random() > 0.7) {
      heart.classList.add("spinning");
    }

    // Random Size
    const size = Math.random() * 10 + 10; // 10px to 20px
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    // Color variation (Reds, Pinks)
    const colors = ["#FF0000", "#FF69B4", "#FF1493", "#DC143C", "#FFB6C1"];
    heart.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    heartsContainer.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }

  // Create hearts more frequently
  setInterval(createHeart, 300);

  // --- Cloud Logic ---
  const cloudsContainer = document.getElementById("clouds");

  function createCloud() {
    const cloud = document.createElement("div");
    cloud.classList.add("pixel-cloud");

    // Random vertical position (top 40% of screen)
    cloud.style.top = Math.random() * 40 + "%";

    // Random scale
    const scale = Math.random() * 0.6 + 0.4;
    cloud.style.transform = `scale(${scale})`;

    // Random duration
    const duration = Math.random() * 25 + 20; // 20s to 45s
    cloud.style.animationDuration = duration + "s";

    cloudsContainer.appendChild(cloud);

    // Remove after animation
    setTimeout(() => {
      cloud.remove();
    }, duration * 1000);
  }

  // Initial clouds - MORE!
  for (let i = 0; i < 8; i++) {
    setTimeout(() => createCloud(), i * 1000);
  }
  // Spawn clouds more frequently
  setInterval(createCloud, 5000);

  // --- Sparkles Logic ---
  const sparklesContainer = document.getElementById("sparkles-container");

  function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("pixel-sparkle");

    // Random position
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    // Random duration
    const duration = Math.random() * 1 + 1; // 1s to 2s
    sparkle.style.animationDuration = duration + "s";

    // Random colors (whites, yellows, pinks)
    const colors = ["#fff", "#fffacd", "#ffb6c1", "#ffd700"];
    sparkle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    sparklesContainer.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, duration * 1000);
  }

  // Create sparkles frequently
  setInterval(createSparkle, 200);

  // --- Butterflies Logic ---
  const butterfliesContainer = document.getElementById("butterflies-container");

  function createButterfly() {
    const butterfly = document.createElement("div");
    butterfly.classList.add("pixel-butterfly");

    // Random vertical start
    butterfly.style.top = Math.random() * 100 + "vh";

    // Random duration
    const duration = Math.random() * 15 + 15; // 15s to 30s
    butterfly.style.animationDuration = duration + "s";

    butterfliesContainer.appendChild(butterfly);

    setTimeout(() => {
      butterfly.remove();
    }, duration * 1000);
  }

  // Initial butterflies
  for (let i = 0; i < 3; i++) {
    setTimeout(() => createButterfly(), i * 3000);
  }
  setInterval(createButterfly, 8000);

  // --- Flower Petals Logic ---
  const petalsContainer = document.getElementById("petals-container");

  function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("pixel-petal");

    // Random horizontal position
    petal.style.left = Math.random() * 100 + "vw";

    // Random duration
    const duration = Math.random() * 8 + 8; // 8s to 16s
    petal.style.animationDuration = duration + "s";

    // Random delay for staggered effect
    petal.style.animationDelay = Math.random() * 2 + "s";

    petalsContainer.appendChild(petal);

    setTimeout(
      () => {
        petal.remove();
      },
      (duration + 2) * 1000,
    );
  }

  // Create petals periodically
  setInterval(createPetal, 600);
});
