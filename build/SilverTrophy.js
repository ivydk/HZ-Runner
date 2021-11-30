import ScorigObjects from './ScoringObjects.js';
export default class SilverTrophy extends ScorigObjects {
    constructor(canvas) {
        super(canvas);
        this.image = ScorigObjects.loadNewImage('assets/img/objects/silver_trophy.png');
        this.points = 5;
    }
}
//# sourceMappingURL=SilverTrophy.js.map