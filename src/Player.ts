import Heart from './Heart.js';
import KeyListener from './KeyListener.js';
import Lightning from './Lightning.js';
import Trophy from './Trophy.js';

export default class Player {
  private keyListener: KeyListener;

  private playerImage: HTMLImageElement;

  private playerPositionX: number;

  // De lanes zouden ook met een setter kunnen uit de game
  private leftLane: number;

  private middleLane: number;

  private rightLane: number;

  private canvas: HTMLCanvasElement;

  /**
   * constructs the player
   *
   * @param canvas drawingboard
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    // x positions of the lanes in the canvas
    this.leftLane = this.canvas.width / 4;
    this.middleLane = this.canvas.width / 2;
    this.rightLane = (this.canvas.width / 4) * 3;

    this.keyListener = new KeyListener();

    // Set the player at the center
    this.playerImage = Player.loadNewImage('./assets/img/players/character_robot_walk0.png');
    this.playerPositionX = this.canvas.width / 2;
  }

  public move = (): void => {
    if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)
      && this.playerPositionX !== this.leftLane) {
      this.playerPositionX = this.leftLane;
    }
    if (this.keyListener.isKeyDown(KeyListener.KEY_UP)
      && this.playerPositionX !== this.middleLane) {
      this.playerPositionX = this.middleLane;
    }
    if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)
      && this.playerPositionX !== this.rightLane) {
      this.playerPositionX = this.rightLane;
    }
  };

  public isCollidingWithTrophy = (trophy: Trophy): boolean => {
    if (
      this.playerPositionX < trophy.getPositionX() + trophy.getImage().width
      && this.playerPositionX + this.playerImage.width > trophy.getPositionX()
      && this.canvas.height - 150 < trophy.getPositionY() + trophy.getImage().height
      && this.canvas.height - 150 + this.playerImage.height > trophy.getPositionY()
    ) {
      return true;
    }
    return false;
  };

  public isCollidingWithLighning = (lightning: Lightning): boolean => {
    if (
      this.playerPositionX < lightning.getPositionX() + lightning.getImage().width
      && this.playerPositionX + this.playerImage.width > lightning.getPositionX()
      && this.canvas.height - 150 < lightning.getPositionY() + lightning.getImage().height
      && this.canvas.height - 150 + this.playerImage.height > lightning.getPositionY()
    ) {
      return true;
    }
    return false;
  };

  public isCollidingWithHeart = (heart: Heart): boolean => {
    if (
      this.playerPositionX < heart.getPositionX() + heart.getImage().width
      && this.playerPositionX + this.playerImage.width > heart.getPositionX()
      && this.canvas.height - 150 < heart.getPositionY() + heart.getImage().height
      && this.canvas.height - 150 + this.playerImage.height > heart.getPositionY()
    ) {
      return true;
    }
    return false;
  };

  public draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.drawImage(this.playerImage,
      this.playerPositionX - this.playerImage.width / 2,
      this.canvas.height - 150);
  };

  /**
   * Loads an image in such a way that the screen doesn't constantly flicker
   *  NOTE: this is a 'static' method. This means that this method must be called like
   * `Game.loadNewImage()` instead of `this.loadNewImage()`.
   *
   *  @param source The address or URL of the a media resource that is to be loaded
   *  @returns an HTMLImageElement with the source as its src attribute
   */
  private static loadNewImage = (source: string): HTMLImageElement => {
    const img = new Image();
    img.src = source;
    return img;
  };
}
