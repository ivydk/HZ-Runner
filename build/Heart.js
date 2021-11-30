import ScorigObjects from './ScoringObjects.js';
export default class Heart extends ScorigObjects {
    constructor(canvas) {
        super(canvas);
        this.image = ScorigObjects.loadNewImage('assets/img/objects/face_on_heart.png');
        this.points = ScorigObjects.HEART_SCORE;
        this.speed = ScorigObjects.SPEED;
    }
}
//# sourceMappingURL=Heart.js.map