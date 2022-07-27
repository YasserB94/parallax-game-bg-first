export default class Player {
    constructor(gameSize, gameProperties, spriteSheet) {
        this.spriteSheet = spriteSheet
        this.gameSize = gameSize;
        this.gameProperties = gameProperties;
        this.size = {
            width: 200,
            height: 200
        }
        this.position = {
            //Start player just outside of left boundary
            x: (this.gameSize.width / 10) + 1,
            y: this.gameSize.height - this.size.height - this.gameProperties.groundMargin
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.boundaries = {
            leftBoundaryPosition: this.size.width / 2,
            rightBoundaryPosition: this.gameSize.width / 2 - (this.size.width * 1.5),
            leftBoundaryHit: false,
            rightBoundaryHit: false,
            bottomBoundaryPosition: this.gameSize.height - this.size.height
        }
        this.properties = {
            speed: this.gameSize.width / 20,
            weight: 10
        }
        this.states = {
            airborn: false
        }
    }
    update(controls) {
        this.updateStates();
        this.applyGravity()
        this.updateBoundaries();
        this.handleInput(controls);
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
        this.position.x += this.velocity.x * this.properties.speed
        this.position.y += this.velocity.y
        this.velocity.x = 0;
    }
    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
    }
    applyGravity() {
        if (this.states.airborn) {
            this.velocity.y += (this.properties.weight * this.gameProperties.gravity)
        } else {
            this.velocity.y = 0
        }
    }
    handleInput(controls) {
        for (const key in controls) {
            if (Object.hasOwnProperty.call(controls, key)) {
                const value = controls[key];
                if (key === "up" && value === true) {
                    if (!this.states.airborn) {
                        this.jump();
                    };
                    continue;
                }
                if (key === "down" && value === true) {
                    continue;
                }
                if (key === "left" && value === true) {
                    if (this.boundaries.leftBoundaryHit) return;
                    this.velocity.x = -this.gameProperties.speed;
                    continue;
                }
                if (key === "right" && value === true) {
                    if (this.boundaries.rightBoundaryHit) return;
                    this.velocity.x = this.gameProperties.speed;
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
    getVelocity() {
        return this.velocity;
    }
    jump() {
        if (this.states.airborn) return;
        this.velocity.y -= (this.size.height / 3)
        //  - (this.properties.weight * this.gameProperties.gravity * this.gameProperties.speed);
    }
    updateStates() {
        this.updateAirborn()
    }
    updateAirborn() {
        if (this.position.y + this.size.height >= this.gameSize.height - this.gameProperties.groundMargin) {
            this.states.airborn = false
        } else {
            this.states.airborn = true
        }
    }
}