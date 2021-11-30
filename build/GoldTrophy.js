import ScorigObjects from './ScoringObjects.js';
export default class GoldTrophy extends ScorigObjects {
    constructor(canvas) {
        super(canvas);
        this.image = ScorigObjects.loadNewImage('assets/img/objects/gold_trophy.png');
        this.points = 10;
    }
}
//# sourceMappingURL=GoldTrophy.js.map