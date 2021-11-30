import ScorigObjects from './ScoringObjects.js';
export default class LightningBolt extends ScorigObjects {
    constructor(canvas) {
        super(canvas);
        this.image = ScorigObjects.loadNewImage('assets/img/objects/titled_yellow_power_icon.png');
        this.points = -10;
    }
}
//# sourceMappingURL=LightningBolt.js.map