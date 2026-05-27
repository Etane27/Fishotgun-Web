const DOWNLOAD_SFX_SRC = new URL("../assets/animal-crossing-catch-sound.mp3", import.meta.url).href;
const DOWNLOAD_REDIRECT_TIMEOUT = 950;

let downloadSfxPreload;
let sfxContext;

function getSfxContext() {
  if (!sfxContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      return null;
    }

    sfxContext = new AudioContextClass();
  }

  return sfxContext;
}

function preloadDownloadSfx() {
  if (!downloadSfxPreload) {
    downloadSfxPreload = new Audio(DOWNLOAD_SFX_SRC);
    downloadSfxPreload.preload = "auto";
  }
}

function playDownloadSfx() {
  const sfx = new Audio(DOWNLOAD_SFX_SRC);
  sfx.volume = 0.72;

  return sfx.play()
    .then(() => new Promise((resolve) => {
      let isDone = false;

      const finish = () => {
        if (isDone) {
          return;
        }

        isDone = true;
        resolve();
      };

      sfx.addEventListener("ended", finish, { once: true });
      window.setTimeout(finish, DOWNLOAD_REDIRECT_TIMEOUT);
    }))
    .catch(() => {});
}

function playCuteClickSfx() {
  const context = getSfxContext();
  if (!context) {
    return;
  }

  if (context.state === "suspended") {
    context.resume();
  }

  const now = context.currentTime;
  const masterGain = context.createGain();
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.07, now + 0.01);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
  masterGain.connect(context.destination);

  const oscillatorA = context.createOscillator();
  oscillatorA.type = "triangle";
  oscillatorA.frequency.setValueAtTime(880, now);
  oscillatorA.frequency.exponentialRampToValueAtTime(1320, now + 0.12);
  oscillatorA.connect(masterGain);

  const oscillatorB = context.createOscillator();
  oscillatorB.type = "sine";
  oscillatorB.frequency.setValueAtTime(1320, now);
  oscillatorB.frequency.exponentialRampToValueAtTime(1760, now + 0.08);

  const gainB = context.createGain();
  gainB.gain.setValueAtTime(0.0001, now);
  gainB.gain.exponentialRampToValueAtTime(0.03, now + 0.01);
  gainB.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
  oscillatorB.connect(gainB);
  gainB.connect(context.destination);

  oscillatorA.start(now);
  oscillatorB.start(now);
  oscillatorA.stop(now + 0.24);
  oscillatorB.stop(now + 0.16);
}

export function initClickSfx() {
  preloadDownloadSfx();

  document.querySelectorAll("button, a[href]").forEach((element) => {
    element.addEventListener("click", (event) => {
      const downloadLink = element.closest("[data-download-link]");

      if (downloadLink) {
        event.preventDefault();
        playDownloadSfx().finally(() => {
          window.location.href = downloadLink.href;
        });
        return;
      }

      playCuteClickSfx();
    });
  });
}
