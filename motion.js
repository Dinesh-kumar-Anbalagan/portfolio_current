const story = document.querySelector(".sequence");
const hero = story.querySelector(".hero");
const stage = story.querySelector(".scene");
const nav = document.querySelector(".nav");
const pills = Array.from(story.querySelectorAll(".pills li"));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let frame = 0;

function clamp(value) {
  return Math.max(0, Math.min(value, 1));
}

function paint() {
  frame = 0;
  if (reducedMotion.matches) {
    story.classList.remove("motion-ready");
    story.style.removeProperty("--camera");
    story.style.removeProperty("--cut");
    return;
  }

  const travelled = nav.offsetHeight - hero.getBoundingClientRect().top;
  const progress = clamp(travelled / stage.offsetHeight);
  const camera = 1 - (1 - progress) ** 2;
  const cut = clamp((progress - 0.14) / 0.62);
  story.style.setProperty("--camera", camera.toFixed(3));
  story.style.setProperty("--cut", cut.toFixed(3));

  for (const [index, pill] of pills.entries()) {
    const reveal = clamp((progress - 0.44 - index * 0.031) / 0.18);
    pill.style.setProperty("--pill-opacity", reveal.toFixed(3));
    pill.style.setProperty("--pill-offset", `${Math.round(26 * (1 - reveal))}px`);
  }
  story.classList.add("motion-ready");
}

function schedulePaint() {
  if (!frame) frame = window.requestAnimationFrame(paint);
}

window.addEventListener("scroll", schedulePaint, { passive: true });
window.addEventListener("resize", schedulePaint);
reducedMotion.addEventListener("change", schedulePaint);
paint();
