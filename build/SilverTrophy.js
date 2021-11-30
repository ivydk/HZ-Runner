import ScorigObjects from './ScoringObjects.js';
export default class SilverTrophy extends ScorigObjects {
    constructor(canvas) {
        super(canvas);
        this.image = ScorigObjects.loadNewImage('assets/img/objects/silver_trophy.png');
        this.points = ScorigObjects.SILVER_TROPHY_SCORE;
        this.speed = ScorigObjects.SPEED;
    }
}
//# sourceMappingURL=SilverTrophy.js.map