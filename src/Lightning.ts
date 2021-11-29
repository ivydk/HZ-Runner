import Game from './main.js';

export default class Lightning {
  private lightningImage: HTMLImageElement;

  private lightningPositionX: number;

  private lightningPositionY: number;

  private lightningSpeed: number;

  private leftLane: number;

  private middleLane: number;

  private rightLane: number;

  private canvas: HTMLCanvasElement;

  /**
   * construct the lightning
   *
   * @param canvas drawing board
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    // x positions of the lanes in the canvas
    this.leftLane = this.canvas.width / 4;
    this.middleLane = this.canvas.width / 2;
    this.rightLane = (this.canvas.width / 4) * 3;

    // TODO create multiple objects over time
    this.lightningImage = Lightning.loadNewImage('assets/img/objects/face_on_blue_power_icon.png');
    this.lightningPositionX = this.canvas.width / 2;
    this.lightningPositionY = 60;
    this.lightningSpeed = 1;

    const random = Game.randomInteger(1, 3);
    if (random === 1) {
      this.lightningPositionX = this.leftLane;
    }
    if (random === 2) {
      this.lightningPositionX = this.middleLane;
    }
    if (random === 3) {
      this.lightningPositionX = this.rightLane;
    }
  }

  /**
   *
   * @returns the number of positionX
   */
  public getPositionX(): number {
    return this.lightningPositionX;
  }

  /**
   * fff
   *
   * @returns the number of positionY
   */
  public getPositionY(): number {
    return this.lightningPositionY;
  }

  /**
   * gets the image
   *
   * @returns the lightning image
   */
  public getImage(): HTMLImageElement {
    return this.lightningImage;
  }

  public move = (elapsed: number): void => {
    // TODO adjust for multiple objects
    this.lightningPositionY += this.lightningSpeed * elapsed;
  };

  public isCollidingWithCanvas = (): boolean => {
    if (this.lightningPositionY + this.lightningImage.height > this.canvas.height) {
      return true;
    }
    return false;
  };

  /**
   * draws the lightning
   *
   * @param ctx canvas rendering context 2d
   */
  public draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.drawImage(
      this.lightningImage,
      this.lightningPositionX - this.lightningImage.width / 2,
      this.lightningPositionY,
    );
  };

  /**
   * Loads an image in such a way that the screen doesn't constantly flicker
   *
   *
   * NOTE: this is a 'static' method. This means that this method must be called like
   * `Game.loadNewImage()` instead of `this.loadNewImage()`.
   *
   * @param source The address or URL of the a media resource that is to be loaded
   * @returns an HTMLImageElement with the source as its src attribute
   */
  public static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }
}
