import GameLoop from './GameLoop.js';
import Player from './Player.js';
import Trophy from './Trophy.js';
import Score from './Score.js';
import Lightning from './Lightning.js';
import Heart from './Heart.js';
console.log('Javascript is working!');
export default class Game {
    canvas;
    gameloop;
    trophy;
    player;
    score;
    lightning;
    heart;
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.width = window.innerWidth / 2;
        this.canvas.height = window.innerHeight;
        this.createRrandomObject();
        this.player = new Player(this.canvas);
        this.score = new Score();
        console.log('start animation');
        this.gameloop = new GameLoop(this);
        this.gameloop.start();
    }
    processInput() {
        this.player.move();
    }
    update(elapsed) {
        if (this.trophy !== null) {
            this.trophy.move(elapsed);
            if (this.player.isCollidingWithTrophy(this.trophy)) {
                this.score.setTotalScore(Score.TROPHY_SCORE);
                this.createRrandomObject();
            }
            else if (this.trophy.isCollidingWithCanvas()) {
                this.createRrandomObject();
            }
        }
        if (this.lightning !== null) {
            this.lightning.move(elapsed);
            if (this.player.isCollidingWithLighning(this.lightning)) {
                this.score.setTotalScore(Score.LIGHTNING_SCORE);
                this.createRrandomObject();
            }
            else if (this.lightning.isCollidingWithCanvas()) {
                this.createRrandomObject();
            }
        }
        if (this.heart !== null) {
            this.heart.move(elapsed);
            if (this.player.isCollidingWithHeart(this.heart)) {
                this.score.setTotalScore(Score.HEART_SCORE);
                this.createRrandomObject();
            }
            else if (this.heart.isCollidingWithCanvas()) {
                this.createRrandomObject();
            }
        }
        return false;
    }
    render() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.writeTextToCanvas('UP arrow = middle | LEFT arrow = left | RIGHT arrow = right', this.canvas.width / 2, 40, 14);
        this.writeTextToCanvas(`Heart = ${Score.HEART_SCORE} | Trophy = ${Score.TROPHY_SCORE} | Lightning = ${Score.LIGHTNING_SCORE}`, this.canvas.width / 2, 60, 14);
        this.writeTextToCanvas(`Total score: ${this.score.getTotalScore()}`, this.canvas.width / 2, 90, 18, 'black');
        this.player.draw(ctx);
        if (this.trophy !== null) {
            this.trophy.draw(ctx);
        }
        else if (this.lightning !== null) {
            this.lightning.draw(ctx);
        }
        else if (this.heart !== null) {
            this.heart.draw(ctx);
        }
    }
    writeTextToCanvas(text, xCoordinate, yCoordinate, fontSize = 20, color = 'red', alignment = 'center') {
        const ctx = this.canvas.getContext('2d');
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    createRrandomObject = () => {
        this.trophy = null;
        this.lightning = null;
        this.heart = null;
        const randomInt = Game.randomInteger(1, 3);
        switch (randomInt) {
            case 1:
                this.trophy = new Trophy(this.canvas);
                break;
            case 2:
                this.lightning = new Lightning(this.canvas);
                break;
            case 3:
                this.heart = new Heart(this.canvas);
                break;
            default:
                console.log('this object does not exists');
                break;
        }
    };
}
window.addEventListener('load', () => new Game(document.getElementById('canvas')));
//# sourceMappingURL=main.js.map