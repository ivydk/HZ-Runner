import Game from './main.js';

export default class Heart {
  private heartImage: HTMLImageElement;

  private heartPositionX: number;

  private heartPositionY: number;

  private heartSpeed: number;

  private leftLane: number;

  private middleLane: number;

  private rightLane: number;

  private canvas: HTMLCanvasElement;

  /**
   * construct the heart
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
    this.heartImage = Heart.loadNewImage('assets/img/objects/face_on_heart.png');
    this.heartPositionX = this.canvas.width / 2;
    this.heartPositionY = 60;
    this.heartSpeed = 1;

    const random = Game.randomInteger(1, 3);
    if (random === 1) {
      this.heartPositionX = this.leftLane;
    }
    if (random === 2) {
      this.heartPositionX = this.middleLane;
    }
    if (random === 3) {
      this.heartPositionX = this.rightLane;
    }
  }

  /**
   *
   * @returns the number of positionX
   */
  public getPositionX(): number {
    return this.heartPositionX;
  }

  /**
   * fff
   *
   * @returns the number of positionY
   */
  public getPositionY(): number {
    return this.heartPositionY;
  }

  /**
   * gets the image
   *
   * @returns the heart image
   */
  public getImage(): HTMLImageElement {
    return this.heartImage;
  }

  public move = (elapsed: number): void => {
    // TODO adjust for multiple objects
    this.heartPositionY += this.heartSpeed * elapsed;
  };

  public isCollidingWithCanvas = (): boolean => {
    if (this.heartPositionY + this.heartImage.height > this.canvas.height) {
      return true;
    }
    return false;
  };

  /**
   * draws the heart
   *
   * @param ctx canvas rendering context 2d
   */
  public draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.drawImage(
      this.heartImage,
      this.heartPositionX - this.heartImage.width / 2,
      this.heartPositionY,
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
