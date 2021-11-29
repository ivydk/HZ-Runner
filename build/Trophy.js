import Game from './main.js';
export default class Trophy {
    trophyImage;
    trophyPositionX;
    trophyPositionY;
    trophySpeed;
    leftLane;
    middleLane;
    rightLane;
    canvas;
    constructor(canvas) {
        this.canvas = canvas;
        this.leftLane = this.canvas.width / 4;
        this.middleLane = this.canvas.width / 2;
        this.rightLane = (this.canvas.width / 4) * 3;
        this.trophyImage = Game.loadNewImage('assets/img/objects/gold_trophy.png');
        this.trophyPositionX = this.canvas.width / 2;
        this.trophyPositionY = 60;
        this.trophySpeed = 1;
        const random = Game.randomInteger(1, 3);
        if (random === 1) {
            this.trophyPositionX = this.leftLane;
        }
        if (random === 2) {
            this.trophyPositionX = this.middleLane;
        }
        if (random === 3) {
            this.trophyPositionX = this.rightLane;
        }
        this.trophyImage = Game.loadNewImage('assets/img/objects/gold_trophy.png');
        this.trophyPositionY = 60;
        this.trophySpeed = 1;
    }
    getPositionX() {
        return this.trophyPositionX;
    }
    getPositionY() {
        return this.trophyPositionY;
    }
    getImage() {
        return this.trophyImage;
    }
    move = (elapsed) => {
        this.trophyPositionY += this.trophySpeed * elapsed;
    };
    isCollidingWithCanvas = () => {
        if (this.trophyPositionY + this.trophyImage.height > this.canvas.height) {
            return true;
        }
        return false;
    };
    draw = (ctx) => {
        ctx.drawImage(this.trophyImage, this.trophyPositionX - this.trophyImage.width / 2, this.trophyPositionY);
    };
}
//# sourceMappingURL=Trophy.js.map