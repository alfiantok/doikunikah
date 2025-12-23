// OPEN INVITATION + MUSIC
document.getElementById("openBtn").addEventListener("click", () => {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("content").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.volume = 0.5;
  music.play();

  showOnScroll();
});

// COUNTDOWN
const targetDate = new Date("2026-01-25 09:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff < 0) return;

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);

  document.getElementById("countdown").innerHTML =
    `${d} Hari ${h} Jam ${m} Menit`;
}, 1000);

// FADE IN ON SCROLL
function showOnScroll() {
  document.querySelectorAll('.fade').forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 80) {
      el.classList.add('show');
    }
  });
}

window.addEventListener("scroll", showOnScroll);
