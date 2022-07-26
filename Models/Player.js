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
        this.boundaries = {
            leftBoundaryPosition: this.gameSize.width / 10,
            rightBoundaryPosition: this.gameSize.width / 2,
            leftBoundaryHit: false,
            rightBoundaryHit: false
        }
    }
    update(controls) {
        this.handleInput(controls);
        this.updateBoundaries();
        this.updatePosition();
    }
    updateBoundaries() {
        if (this.position.x <= this.boundaries.leftBoundaryPosition) {
            this.boundaries.leftBoundaryHit = true;
        } else {
            this.boundaries.leftBoundaryHit = false;
        }
        if (this.position.x >= this.boundaries.rightBoundaryPosition) {
            this.boundaries.rightBoundaryHit = true;
        } else {
            this.boundaries.rightBoundaryHit = false;
        }
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
                    if (this.boundaries.leftBoundaryHit) return;
                    this.velocity.x = -5;
                    continue;
                }
                if (key === "right" && value === true) {
                    if (this.boundaries.rightBoundaryHit) return;
                    this.velocity.x = 5;
                    continue;
                }
            }
        }

    }
    getBoundaries() {
        return {
            left: this.boundaries.leftBoundaryHit,
            right: this.boundaries.rightBoundaryHit
        }
    }
}