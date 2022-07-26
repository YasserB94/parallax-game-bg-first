export default class Layer {
    constructor(image, velocity, gameSize) {
        this.image = image;
        this.gameSize = gameSize;
        this.velocity = {
            x: velocity.x,
            y: 0
        };
        this.position = {
            x: 0,
            y: 0
        }


    }
    update(direction, gameSpeed) {
        console.log(this.velocity.x)
        if (this.position.x < -this.gameSize.width) {
            this.position.x = 0;
        }
        if (this.position.x > this.gameSize.width) {
            this.position.x = 0;
        }
        this.position.x += this.velocity.x * direction * gameSpeed

    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.gameSize.width, this.gameSize.height);
        ctx.drawImage(this.image, this.position.x - this.gameSize.width, this.position.y, this.gameSize.width, this.gameSize.height);
        ctx.drawImage(this.image, this.position.x + this.gameSize.width, this.position.y, this.gameSize.width, this.gameSize.height);
    }
}
export class BackGroundLayer extends Layer {
    constructor(image, velocity) {
        super(image, velocity)
    };
}