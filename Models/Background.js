import Layer from "./Layer.js";


export default class Background {
    constructor(images, gameSize, gameProperties) {
        this.backgroundLayers = [];
        this.gameSize = gameSize;
        this.gameProperties = gameProperties
        this.init(images);
        this.state = {
            moving: false,
            directionX: 0
        }
    }
    init(images) {
        this.createLayers(images);
    }
    createLayers(images) {
        //TODO - MAKE VELOCITY MODULAR TO FPS OF GAME
        let velocity = {
            x: .1,
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
        this.updateLayers()
    }
    updateLayers() {
        if (!this.state.moving) return;
        this.backgroundLayers.forEach(layer => {
            layer.update(this.state.directionX, this.gameProperties.speed);
        })
    }
    draw(ctx) {
        this.backgroundLayers.forEach(layer => {
            layer.draw(ctx)
        })
    }
    handleInput(controls, playerBoundaries) {
        //Reset moving when no input is detected
        this.state.moving = false;
        for (const key in controls) {
            if (Object.hasOwnProperty.call(controls, key)) {
                const value = controls[key];
                if (key === "up" && value === true) {
                    continue;
                }
                if (key === "down" && value === true) {

                    continue;
                }
                if (key === "left" && value === true) {
                    if (playerBoundaries.left === false) continue;
                    //Background moves in opposite direction of player
                    this.state.moving = true;
                    this.state.directionX = 1;
                    continue;
                }
                if (key === "right" && value === true) {
                    if (playerBoundaries.right === false) continue;
                    //Background moves in opposite direction of player
                    this.state.moving = true;
                    this.state.directionX = -1;
                    continue;
                }
            }
        }
    }

}