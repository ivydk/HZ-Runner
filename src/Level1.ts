import Level from './Level.js';

export default class Level1 extends Level {
  /**
   * Construct a new instance of this class
   *
   * @param canvas the canvas on which the player should exist
   */
  public constructor(canvas: HTMLElement) {
    super(canvas, 10);
  }
}
