import kaboom from 'https://cdn.jsdelivr.net/npm/kaboom@3000.1.13/+esm';
import { config } from "./config.js";

export const kOptions = {
  width: config.gameWidth,
  height: config.gameHeight,
  font: "sans-serif",
  canvas: document.querySelector("#game"),
  background: [0, 0, 255,],
  crisp: true
}

export const k = kaboom(kOptions);