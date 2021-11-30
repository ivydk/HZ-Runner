import GameLoop from './GameLoop.js';
import Player from './Player.js';
import GoldTrophy from './GoldTrophy.js';
import LightningBolt from './LightningBolt.js';
import RedCross from './RedCross.js';
import SilverTrophy from './SilverTrophy.js';
import Heart from './Heart.js';
export default class Game {
    canvas;
    gameloop;
    player;
    scoringObject;
    arrayOfScorringObjects;
    totalScore;
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.width = window.innerWidth / 3;
        this.canvas.height = window.innerHeight;
        this.arrayOfScorringObjects = [];
        this.createRandomScoringObject();
        this.player = new Player(this.canvas);
        this.totalScore = 0;
        console.log('start animation');
        this.gameloop = new GameLoop(this);
        this.gameloop.start();
    }
    processInput() {
        this.player.move();
    }
    update(elapsed) {
        if (this.gameloop.frameCount % 45 === 0) {
            this.createRandomScoringObject();
        }
        this.arrayOfScorringObjects.forEach((scoringObject) => {
            scoringObject.move(elapsed);
            if (this.player.collidesWith(scoringObject)) {
                this.totalScore += scoringObject.getPoints();
                this.removeItemFromScoringObjects(scoringObject);
            }
            else if (scoringObject.collidesWithCanvasBottom()) {
                this.removeItemFromScoringObjects(scoringObject);
            }
        });
        return false;
    }
    render() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.writeTextToCanvas('UP arrow = middle | LEFT arrow = left | RIGHT arrow = right', this.canvas.width / 2, 40, 14);
        this.drawScore();
        this.player.draw(ctx);
        this.arrayOfScorringObjects.forEach((scoringObject) => {
            scoringObject.draw(ctx);
        });
    }
    removeItemFromScoringObjects(object) {
        const index = this.arrayOfScorringObjects.indexOf(object);
        this.arrayOfScorringObjects.splice(index, 1);
    }
    drawScore() {
        this.writeTextToCanvas(`Score: ${this.totalScore}`, this.canvas.width / 2, 80, 16);
    }
    createRandomScoringObject() {
        this.scoringObject = null;
        const random = Game.randomInteger(1, 5);
        if (random === 1) {
            this.scoringObject = new GoldTrophy(this.canvas);
        }
        if (random === 2) {
            this.scoringObject = new SilverTrophy(this.canvas);
        }
        if (random === 3) {
            this.scoringObject = new RedCross(this.canvas);
        }
        if (random === 4) {
            this.scoringObject = new LightningBolt(this.canvas);
        }
        if (random === 5) {
            this.scoringObject = new Heart(this.canvas);
        }
        this.arrayOfScorringObjects.push(this.scoringObject);
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
}
//# sourceMappingURL=Game.js.map