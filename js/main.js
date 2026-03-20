import { initCarousel } from "./carousel.js";
import { initClickSfx } from "./click-sfx.js";
import { initLanguageSwitcher } from "./language.js";
import { initMusicPlayer } from "./music.js";

document.getElementById("year").textContent = new Date().getFullYear();

initLanguageSwitcher();
initMusicPlayer();
initClickSfx();
initCarousel();
