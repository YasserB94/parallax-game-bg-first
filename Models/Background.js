import Layer from "./Layer.js";


export default class Background {
    constructor(images, gameSize) {
        this.backgroundLayers = [];
        this.gameSize = gameSize;
        this.init(images);
    }
    init(images) {
        this.createLayers(images);
    }
    createLayers(images) {
        //TODO - MAKE VELOCITY MODULAR TO FPS OF GAME
        let velocity = {
            x: 0.2,
            y: 0
        }
        images.forEach(image => {
            const tmpLayer = new Layer(image, velocity, this.gameSize)
            this.backgroundLayers.push(tmpLayer)
            velocity.x = velocity.x * 2
        });
    }
    update(controls, playerBoundaries) {
        this.handleInput(controls, playerBoundaries)

    }

    draw(ctx) {
        this.backgroundLayers.forEach(layer => {
            layer.draw(ctx)
        })
    }
    handleInput(controls, playerBoundaries) {

    }
}