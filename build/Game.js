import GameLoop from './GameLoop.js';
import Level1 from './Level1.js';
export default class Game {
    canvas;
    gameLoop;
    player;
    scoringObjects;
    silverTrophy;
    redCross;
    lightningBolt;
    totalScore;
    currentLevel;
    levels;
    constructor(canvas) {
        this.levels = [];
        this.levels.push(new Level1(canvas));
        this.canvas = canvas;
        console.log(`Level ${this.currentLevel}`);
        console.log('start animation');
        this.gameLoop = new GameLoop(this);
        this.gameLoop.start();
    }
    update(elapsed) {
        if (this.levels[this.currentLevel].isCompleted()) {
            this.currentLevel += 1;
        }
        return this.levels[this.currentLevel].update(elapsed, this.gameLoop.frameCount);
    }
    processInput() {
        this.levels[this.currentLevel].processInput();
    }
    render() {
        this.levels[this.currentLevel].render();
    }
}
//# sourceMappingURL=Game.js.map