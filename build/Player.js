import KeyListener from './KeyListener.js';
export default class Player {
    keyListener;
    playerImage;
    playerPositionX;
    leftLane;
    middleLane;
    rightLane;
    canvas;
    constructor(canvas) {
        this.canvas = canvas;
        this.leftLane = this.canvas.width / 4;
        this.middleLane = this.canvas.width / 2;
        this.rightLane = (this.canvas.width / 4) * 3;
        this.keyListener = new KeyListener();
        this.playerImage = Player.loadNewImage('./assets/img/players/character_robot_walk0.png');
        this.playerPositionX = this.canvas.width / 2;
    }
    move = () => {
        if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)
            && this.playerPositionX !== this.leftLane) {
            this.playerPositionX = this.leftLane;
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_UP)
            && this.playerPositionX !== this.middleLane) {
            this.playerPositionX = this.middleLane;
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)
            && this.playerPositionX !== this.rightLane) {
            this.playerPositionX = this.rightLane;
        }
    };
    isCollidingWithTrophy = (trophy) => {
        if (this.playerPositionX < trophy.getPositionX() + trophy.getImage().width
            && this.playerPositionX + this.playerImage.width > trophy.getPositionX()
            && this.canvas.height - 150 < trophy.getPositionY() + trophy.getImage().height
            && this.canvas.height - 150 + this.playerImage.height > trophy.getPositionY()) {
            return true;
        }
        return false;
    };
    isCollidingWithLighning = (lightning) => {
        if (this.playerPositionX < lightning.getPositionX() + lightning.getImage().width
            && this.playerPositionX + this.playerImage.width > lightning.getPositionX()
            && this.canvas.height - 150 < lightning.getPositionY() + lightning.getImage().height
            && this.canvas.height - 150 + this.playerImage.height > lightning.getPositionY()) {
            return true;
        }
        return false;
    };
    isCollidingWithHeart = (heart) => {
        if (this.playerPositionX < heart.getPositionX() + heart.getImage().width
            && this.playerPositionX + this.playerImage.width > heart.getPositionX()
            && this.canvas.height - 150 < heart.getPositionY() + heart.getImage().height
            && this.canvas.height - 150 + this.playerImage.height > heart.getPositionY()) {
            return true;
        }
        return false;
    };
    draw = (ctx) => {
        ctx.drawImage(this.playerImage, this.playerPositionX - this.playerImage.width / 2, this.canvas.height - 150);
    };
    static loadNewImage = (source) => {
        const img = new Image();
        img.src = source;
        return img;
    };
}
//# sourceMappingURL=Player.js.map