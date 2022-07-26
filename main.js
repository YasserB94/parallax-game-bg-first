import GameController from "./Models/GameController.js";

window.addEventListener("load", () => {
    const canvas = document.getElementById("2d--js--game--parallax");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const gameController = new GameController(canvas);
    gameController.startGameLoop();
});
