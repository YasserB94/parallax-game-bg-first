import Layer from "./Layer.js";


export default class Background {
    constructor(images) {
        this.backgroundLayers = [];
        this.init(images);
    }
    init(images) {
        this.createLayers(images);
    }
    createLayers(images) {
        //TODO - MAKE SPEED MODULAR TO FPS OF GAME
        let speed = 0;
        images.forEach(image => {
            const tmpLayer = new Layer(image, speed)
            speed++
        });
    }
    update(controls, playerBoundaries) {

    }
    draw() {

    }
}