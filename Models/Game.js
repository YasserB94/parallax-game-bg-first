
import InputHandler from "./InputHandler.js";
import Player from "./Player.js";
import Background from "./Background.js";
const GAME_BACKGROUND_LAYER_AMOUNT = 8;
export default class Game {
    constructor(canvas, FPS) {
        this.ctx = canvas.getContext("2d");
        this.inputHandler = new InputHandler();
        this.size = {
            width: canvas.width,
            height: canvas.height
        }
        this.properties = {
            fps: FPS
        }
        this.init()
    }
    init() {
        this.backgroundImages = [];
        this.getBackgroundImages();
        this.player = new Player(this.size);
        this.background = new Background(this.backgroundImages)
    }
    update() {
        this.player.update(this.inputHandler.getControls())
    }
    draw() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.size.width, this.size.height)
        this.player.draw(this.ctx)
    }
    getBackgroundImages() {
        for (let i = 1; i <= GAME_BACKGROUND_LAYER_AMOUNT; i++) {
            const img = document.getElementById('game_bg_img_layer_' + i);
            this.backgroundImages.push(img)
        }

    }
}
