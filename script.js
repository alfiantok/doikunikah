// OPEN + MUSIC
document.getElementById("openBtn").onclick = () => {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("content").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.volume = 0.5;
  music.play();

  reveal();
};

// COUNTDOWN (SAMPAI DETIK)
const target = new Date("2026-01-25T09:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  if (diff < 0) return;

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${d} Hari<br>${h}:${m}:${s}`;
}, 1000);

// FADE ON SCROLL
function reveal() {
  document.querySelectorAll('.fade').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('show');
    }
  });
}
window.addEventListener("scroll", reveal);
