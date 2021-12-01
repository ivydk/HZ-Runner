import GoldTrophy from './GoldTrophy.js';
import LightningBolt from './LightningBolt.js';
import Player from './Player.js';
import RedCross from './RedCross.js';
import SilverTrophy from './SilverTrophy.js';
export default class Level {
    static LEVEL_SCORE_TO_PROGRESS = [null, 10, 15, 20, 25, 30, 35,
        40, 45, 50, 55, 60];
    canvas;
    player;
    scoringObjects;
    score;
    scoreToProgress;
    constructor(canvas, scoreToProgress) {
        this.canvas = canvas;
        this.canvas.width = window.innerWidth / 2;
        this.canvas.height = window.innerHeight;
        this.scoringObjects = [];
        this.createRandomScoringObject();
        this.player = new Player(this.canvas);
        this.score = 0;
        this.scoreToProgress = scoreToProgress;
    }
    processInput() {
        this.player.move();
    }
    update(elapsed, frameCount) {
        if (frameCount % 45 === 0) {
            this.createRandomScoringObject();
        }
        this.scoringObjects.forEach((scoringObject) => {
            scoringObject.move(elapsed);
            if (this.player.collidesWith(scoringObject)) {
                this.score += scoringObject.getPoints();
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
        this.scoringObjects.forEach((scoringObject) => {
            scoringObject.draw(ctx);
        });
    }
    drawScore() {
        this.writeTextToCanvas(`Score: ${this.score}`, this.canvas.width / 2, 80, 16);
    }
    createRandomScoringObject() {
        const random = Level.randomInteger(1, 4);
        if (random === 1) {
            this.scoringObjects.push(new GoldTrophy(this.canvas));
        }
        if (random === 2) {
            this.scoringObjects.push(new SilverTrophy(this.canvas));
        }
        if (random === 3) {
            this.scoringObjects.push(new RedCross(this.canvas));
        }
        if (random === 4) {
            this.scoringObjects.push(new LightningBolt(this.canvas));
        }
    }
    removeItemFromScoringObjects(item) {
        const index = this.scoringObjects.indexOf(item);
        this.scoringObjects.splice(index, 1);
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
    getScore = () => this.score;
    isCompleted() {
        return this.score >= this.scoreToProgress;
    }
}
//# sourceMappingURL=Level.js.map