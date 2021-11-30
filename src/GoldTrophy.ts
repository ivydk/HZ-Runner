import ScorigObjects from './ScoringObjects.js';

export default class GoldTrophy extends ScorigObjects {
  /**
   * Construct a new instance of this class
   *
   * @param canvas the canvas on which the player should exist
   */
  public constructor(canvas: HTMLCanvasElement) {
    // Call the superclass constructor
    super(canvas);

    this.image = ScorigObjects.loadNewImage('assets/img/objects/gold_trophy.png');
    this.points = 10;
  }
}
