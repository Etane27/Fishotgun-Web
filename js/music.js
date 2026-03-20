import { backgroundMusic, musicRecord, musicToggle, tonearm } from "./dom.js";

function updateMusicButton(isPlaying) {
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicToggle.setAttribute("aria-label", isPlaying ? "Pause background music" : "Play background music");
  musicToggle.title = isPlaying ? "Now Playing: Main Theme" : "Music paused";
  musicRecord.classList.toggle("animate-spin", isPlaying);
  musicRecord.style.animationDuration = "3.8s";
  musicToggle.classList.toggle("brightness-100", !isPlaying);
  musicToggle.classList.toggle("brightness-110", isPlaying);
  tonearm.style.transform = isPlaying ? "rotate(22deg)" : "rotate(5deg)";
}

async function tryAutoplayMusic() {
  try {
    await backgroundMusic.play();
    updateMusicButton(true);
  } catch (error) {
    updateMusicButton(false);
  }
}

export function initMusicPlayer() {
  backgroundMusic.volume = 0.35;
  updateMusicButton(false);

  musicToggle.addEventListener("click", async () => {
    if (backgroundMusic.paused) {
      try {
        await backgroundMusic.play();
        updateMusicButton(true);
      } catch (error) {
        updateMusicButton(false);
      }
      return;
    }

    backgroundMusic.pause();
    updateMusicButton(false);
  });

  tryAutoplayMusic();

  ["click", "keydown", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, () => {
      if (backgroundMusic.paused) {
        tryAutoplayMusic();
      }
    }, { once: true });
  });
}
