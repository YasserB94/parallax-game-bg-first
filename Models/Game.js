export default class Game {
    constructor(canvas, inputHandler, FPS) {
        this.ctx = canvas.getContext("2d");
        this.inputHandler = inputHandler;
        this.size = {
            width: canvas.width,
            height: canvas.height
        }
        this.properties = {
            fps: FPS
        }
    }
    update() {

    }
    draw() {

    }
}