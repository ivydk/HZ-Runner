import Game from './main.js';
export default class Heart {
    heartImage;
    heartPositionX;
    heartPositionY;
    heartSpeed;
    leftLane;
    middleLane;
    rightLane;
    canvas;
    constructor(canvas) {
        this.canvas = canvas;
        this.leftLane = this.canvas.width / 4;
        this.middleLane = this.canvas.width / 2;
        this.rightLane = (this.canvas.width / 4) * 3;
        this.heartImage = Heart.loadNewImage('assets/img/objects/face_on_heart.png');
        this.heartPositionX = this.canvas.width / 2;
        this.heartPositionY = 60;
        this.heartSpeed = 1;
        const random = Game.randomInteger(1, 3);
        if (random === 1) {
            this.heartPositionX = this.leftLane;
        }
        if (random === 2) {
            this.heartPositionX = this.middleLane;
        }
        if (random === 3) {
            this.heartPositionX = this.rightLane;
        }
    }
    getPositionX() {
        return this.heartPositionX;
    }
    getPositionY() {
        return this.heartPositionY;
    }
    getImage() {
        return this.heartImage;
    }
    move = (elapsed) => {
        this.heartPositionY += this.heartSpeed * elapsed;
    };
    isCollidingWithCanvas = () => {
        if (this.heartPositionY + this.heartImage.height > this.canvas.height) {
            return true;
        }
        return false;
    };
    draw = (ctx) => {
        ctx.drawImage(this.heartImage, this.heartPositionX - this.heartImage.width / 2, this.heartPositionY);
    };
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
//# sourceMappingURL=Heart.js.map