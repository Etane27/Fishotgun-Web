import { backgroundMusic, musicRecord, musicToggle, tonearm } from "./dom.js";

function updateMusicButton(isPlaying) {
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicToggle.setAttribute("aria-label", isPlaying ? "Pause background music" : "Play background music");
  musicToggle.title = isPlaying ? "Now Playing: Main Theme" : "Music paused";
  musicToggle.classList.toggle("is-playing", isPlaying);

  if (musicRecord) {
    musicRecord.classList.toggle("is-spinning", isPlaying);
  }

  if (tonearm) {
    tonearm.style.transform = isPlaying ? "rotate(22deg)" : "rotate(5deg)";
  }
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
  if (!backgroundMusic || !musicToggle) {
    return;
  }

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

  ["click", "keydown", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, () => {
      if (backgroundMusic.paused) {
        tryAutoplayMusic();
      }
    }, { once: true });
  });
}
