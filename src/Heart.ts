import ScorigObjects from './ScoringObjects.js';

export default class Heart extends ScorigObjects {
  /**
   * Construct a new instance of this class
   *
   * @param canvas the canvas on which the player should exist
   */
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.image = ScorigObjects.loadNewImage('assets/img/objects/face_on_heart.png');
    this.points = 15;
  }
}
