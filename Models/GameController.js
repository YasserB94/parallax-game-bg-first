import Game from "./Game.js";
export default class GameController {
    constructor(canvas) {
        this.fps = 60;
        this.game = new Game(canvas, this.InputHandler, this.fps);
        this.startGameLoop();
    }
    startGameLoop() {
        //Wrapped in Arrow Function to resolve scope issues
        this.timeSinceLastFrame = 0;
        window.requestAnimationFrame((currentTime) => {
            this.gameLoop(currentTime);
        });
    }
    gameLoop(currentTime) {
        const secondsSinceLastRender = (currentTime - this.timeSinceLastFrame) / 1000;
        if (secondsSinceLastRender < 1 / this.fps) {
            window.requestAnimationFrame((currentTime) => {
                this.gameLoop(currentTime);
            });
            return;
        };
        this.timeSinceLastFrame = currentTime;
        this.game.update();
        this.game.draw();
        //Wrapped in Arrow Function to resolve scope issues
        window.requestAnimationFrame((currentTime) => {
            this.gameLoop(currentTime);
        });
    }
}
