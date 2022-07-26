export default class Player {
    constructor(gameSize) {
        this.gameSize = gameSize;
        this.size = {
            width: 200,
            height: 200
        }
        this.position = {
            x: 0,
            y: 0
        }
        this.velocity = {
            x: 0,
            y: 0
        }
    }
    update(controls) {
        this.handleInput(controls);

        this.updatePosition();
    }
    updatePosition() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.velocity.x = 0;
        this.velocity.y = 0;
    }
    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
    }
    handleInput(controls) {
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
                    this.velocity.x = -1;
                    continue;
                }
                if (key === "right" && value === true) {
                    this.velocity.x = 1;
                    continue;
                }
            }
        }
    }
}