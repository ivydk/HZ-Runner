import ScorigObjects from './ScoringObjects.js';
export default class LightningBolt extends ScorigObjects {
    constructor(canvas) {
        super(canvas);
        this.image = ScorigObjects.loadNewImage('assets/img/objects/titled_yellow_power_icon.png');
        this.points = ScorigObjects.LIGHTNING_SCORE;
        this.speed = ScorigObjects.SPEED;
    }
}
//# sourceMappingURL=LightningBolt.js.map