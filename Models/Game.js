
import InputHandler from "./InputHandler.js";
import Player from "./Player.js";
import GenericLayer from "./GenericLayer.js";
const GAME_BACKGROUND_LAYER_AMOUNT = 8;
const GAME_FOREGROUND_LATER_AMOUNT = 2;
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
            speed: 0.5,
            movementSpeed: 1,
            backgroundSpeed: 'hi',
            groundMargin: 120,
            gravity: 1
        }
        this.init()
    }
    init() {
        const backgroundImages = this.getBackgroundImages();;
        this.background = new GenericLayer(backgroundImages, this.size, this.properties, true)
        const foregroundImages = this.getForegroundImages();
        this.foreground = new GenericLayer(foregroundImages, this.size, this.properties, false)
        this.player = new Player(this.size, this.properties);
    }
    update() {
        this.properties.backgroundSpeed = this.player.size.width / 3
        this.background.update(this.inputHandler.getControls(), this.player.getBoundaries(), this.player.getVelocity())
        this.foreground.update(this.inputHandler.getControls(), this.player.getBoundaries(), this.player.getVelocity())
        this.player.update(this.inputHandler.getControls())

    }
    draw() {
        this.ctx.fillStyle = 'cyan';
        this.ctx.fillRect(0, 0, this.size.width, this.size.height)
        this.background.draw(this.ctx)
        this.player.draw(this.ctx)
        this.foreground.draw(this.ctx)
    }
    getBackgroundImages() {
        let images = []
        for (let i = 1; i <= GAME_BACKGROUND_LAYER_AMOUNT; i++) {
            const img = document.getElementById('game_bg_img_layer_' + i);
            images.push(img)
        }
        return images;

    }
    getForegroundImages() {
        let images = []
        for (let i = 1; i <= GAME_FOREGROUND_LATER_AMOUNT; i++) {
            const img = document.getElementById('game_fg_img_layer_' + i)
            console.log(img)
            images.push(img)
        }
        return images;
    }
}
