import Game from './main.js';

export default class Trophy {
  private trophyImage: HTMLImageElement;

  private trophyPositionX: number;

  private trophyPositionY: number;

  private trophySpeed: number;

  private leftLane: number;

  private middleLane: number;

  private rightLane: number;

  private canvas: HTMLCanvasElement;

  /**
   * construct the trophy
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
    this.trophyImage = Game.loadNewImage('assets/img/objects/gold_trophy.png');
    this.trophyPositionX = this.canvas.width / 2;
    this.trophyPositionY = 60;
    this.trophySpeed = 1;

    const random = Game.randomInteger(1, 3);
    if (random === 1) {
      this.trophyPositionX = this.leftLane;
    }
    if (random === 2) {
      this.trophyPositionX = this.middleLane;
    }
    if (random === 3) {
      this.trophyPositionX = this.rightLane;
    }

    this.trophyImage = Game.loadNewImage('assets/img/objects/gold_trophy.png');
    this.trophyPositionY = 60;
    this.trophySpeed = 1;
  }

  /**
   *
   * @returns the number of positionX
   */
  public getPositionX(): number {
    return this.trophyPositionX;
  }

  /**
   * fff
   *
   * @returns the number of positionY
   */
  public getPositionY(): number {
    return this.trophyPositionY;
  }

  /**
   * gets the image
   *
   * @returns the trophy image
   */
  public getImage(): HTMLImageElement {
    return this.trophyImage;
  }

  public move = (elapsed: number): void => {
    // TODO adjust for multiple objects
    this.trophyPositionY += this.trophySpeed * elapsed;
  };

  public isCollidingWithCanvas = (): boolean => {
    if (this.trophyPositionY + this.trophyImage.height > this.canvas.height) {
      return true;
    }
    return false;
  };

  /**
   * draws the trophy
   *
   * @param ctx canvas rendering context 2d
   */
  public draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.drawImage(
      this.trophyImage,
      this.trophyPositionX - this.trophyImage.width / 2,
      this.trophyPositionY,
    );
  };
}
