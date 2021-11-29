import Game from './main.js';
export default class Lightning {
    lightningImage;
    lightningPositionX;
    lightningPositionY;
    lightningSpeed;
    leftLane;
    middleLane;
    rightLane;
    canvas;
    constructor(canvas) {
        this.canvas = canvas;
        this.leftLane = this.canvas.width / 4;
        this.middleLane = this.canvas.width / 2;
        this.rightLane = (this.canvas.width / 4) * 3;
        this.lightningImage = Lightning.loadNewImage('assets/img/objects/face_on_blue_power_icon.png');
        this.lightningPositionX = this.canvas.width / 2;
        this.lightningPositionY = 60;
        this.lightningSpeed = 1;
        const random = Game.randomInteger(1, 3);
        if (random === 1) {
            this.lightningPositionX = this.leftLane;
        }
        if (random === 2) {
            this.lightningPositionX = this.middleLane;
        }
        if (random === 3) {
            this.lightningPositionX = this.rightLane;
        }
    }
    getPositionX() {
        return this.lightningPositionX;
    }
    getPositionY() {
        return this.lightningPositionY;
    }
    getImage() {
        return this.lightningImage;
    }
    move = (elapsed) => {
        this.lightningPositionY += this.lightningSpeed * elapsed;
    };
    isCollidingWithCanvas = () => {
        if (this.lightningPositionY + this.lightningImage.height > this.canvas.height) {
            return true;
        }
        return false;
    };
    draw = (ctx) => {
        ctx.drawImage(this.lightningImage, this.lightningPositionX - this.lightningImage.width / 2, this.lightningPositionY);
    };
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
//# sourceMappingURL=Lightning.js.map