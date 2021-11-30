import ScoringObjects from './ScoringObjects.js';

export default class GoldTrophy extends ScoringObjects {
  /**
   * Construct a new instance of this class
   *
   * @param canvas the canvas on which the player should exist
   */
  public constructor(canvas: HTMLCanvasElement) {
    // Call the superclass constructor
    super(canvas);

    this.image = ScoringObjects.loadNewImage('assets/img/objects/gold_trophy.png');
    this.points = ScoringObjects.GOLD_TROPHY_SCORE;
    this.speed = ScoringObjects.SPEED;
  }
}
