import ScorigObjects from './ScoringObjects.js';
export default class GoldTrophy extends ScorigObjects {
    constructor(canvas) {
        super(canvas);
        this.image = ScorigObjects.loadNewImage('assets/img/objects/gold_trophy.png');
        this.points = ScorigObjects.GOLD_TROPHY_SCORE;
        this.speed = ScorigObjects.SPEED;
    }
}
//# sourceMappingURL=GoldTrophy.js.map