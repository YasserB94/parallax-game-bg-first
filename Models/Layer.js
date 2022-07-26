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
    update(direction, gameProperties) {
        if (this.position.x < -this.gameSize.width) {
            this.position.x = 0;
        }
        if (this.position.x > this.gameSize.width) {
            this.position.x = 0;
        }
        this.position.x += this.velocity.x * direction * gameProperties.speed * gameProperties.backgroundSpeed

    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.gameSize.width, this.gameSize.height);
        ctx.drawImage(this.image, this.position.x - this.gameSize.width, this.position.y, this.gameSize.width, this.gameSize.height);
        ctx.drawImage(this.image, this.position.x + this.gameSize.width, this.position.y, this.gameSize.width, this.gameSize.height);
    }
}
