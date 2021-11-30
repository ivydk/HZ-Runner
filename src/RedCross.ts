import ScoringObjects from './ScoringObjects.js';

export default class RedCross extends ScoringObjects {
  /**
   * Construct a new instance of this class
   *
   * @param canvas the canvas on which the player should exist
   */
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.image = ScoringObjects.loadNewImage('assets/img/objects/tilted_cross.png');
    this.points = ScoringObjects.RED_CROSS_SCORE;
    this.speed = ScoringObjects.SPEED;
  }
}
