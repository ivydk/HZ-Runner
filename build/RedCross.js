import ScorigObjects from './ScoringObjects.js';
export default class RedCross extends ScorigObjects {
    constructor(canvas) {
        super(canvas);
        this.image = ScorigObjects.loadNewImage('assets/img/objects/tilted_cross.png');
        this.points = ScorigObjects.RED_CROSS_SCORE;
        this.speed = ScorigObjects.SPEED;
    }
}
//# sourceMappingURL=RedCross.js.map