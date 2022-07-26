export default class Layer {
    constructor(image, velocity, gameSize) {
        this.image = image;
        this.gameSize = gameSize;
        this.velocity = velocity;
        this.position = {
            x: 0,
            y: 0
        }

    }
    update() {

    }
    draw(ctx) {

        ctx.drawImage(this.image, this.position.x, this.position.y, this.gameSize.width, this.gameSize.height);
    }
}
export class BackGroundLayer extends Layer {
    constructor(image, velocity) {
        super(image, velocity)
    };
}