import ScoringObjects from './ScoringObjects.js';

export default class SilverTrophy extends ScoringObjects {
  /**
   * Construct a new instance of this class
   *
   * @param canvas the canvas on which the player should exist
   */
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.image = ScoringObjects.loadNewImage('assets/img/objects/silver_trophy.png');
    this.points = ScoringObjects.SILVER_TROPHY_SCORE;
    this.speed = ScoringObjects.SPEED;
  }
}
