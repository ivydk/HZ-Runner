import ScorigObjects from './ScoringObjects.js';

export default class LightningBolt extends ScorigObjects {
  /**
   * Construct a new instance of this class
   *
   * @param canvas the canvas on which the player should exist
   */
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.image = ScorigObjects.loadNewImage('assets/img/objects/titled_yellow_power_icon.png');

    this.points = -10;
  }
}
