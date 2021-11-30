import ScoringObjects from './ScoringObjects.js';

export default class Heart extends ScoringObjects {
  /**
   * Construct a new instance of this class
   *
   * @param canvas the canvas on which the player should exist
   */
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.image = ScoringObjects.loadNewImage('assets/img/objects/face_on_heart.png');
    this.points = ScoringObjects.HEART_SCORE;
    this.speed = ScoringObjects.SPEED;
  }
}
