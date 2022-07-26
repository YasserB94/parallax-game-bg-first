
import InputHandler from "./InputHandler.js";
import Player from "./Player.js";
import GenericLayer from "./GenericLayer.js";
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
            fps: FPS,
            speed: .5,
            movementSpeed: 1,
            backgroundSpeed: 1,
            groundMargin: 0,
            gravity: 1
        }
        this.init()
    }
    init() {
        this.backgroundImages = [];
        this.getBackgroundImages();
        this.player = new Player(this.size, this.properties);
        this.background = new GenericLayer(this.backgroundImages, this.size, this.properties, true)
    }
    update() {
        this.properties.backgroundSpeed = this.player.size.width / 3
        this.background.update(this.inputHandler.getControls(), this.player.getBoundaries(), this.player.getVelocity())
        this.player.update(this.inputHandler.getControls())

    }
    draw() {
        this.ctx.fillStyle = 'cyan';
        this.ctx.fillRect(0, 0, this.size.width, this.size.height)
        this.background.draw(this.ctx)
        this.player.draw(this.ctx)
    }
    getBackgroundImages() {
        for (let i = 1; i <= GAME_BACKGROUND_LAYER_AMOUNT; i++) {
            const img = document.getElementById('game_bg_img_layer_' + i);
            this.backgroundImages.push(img)
        }

    }
}
