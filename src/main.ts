import GameLoop from './GameLoop.js';
import Player from './Player.js';
import Trophy from './Trophy.js';
import Score from './Score.js';
import Lightning from './Lightning.js';
import Heart from './Heart.js';

console.log('Javascript is working!');

/**
 * Main class of this Game.
 */
export default class Game {
  // The canvas
  private canvas: HTMLCanvasElement;

  private gameloop: GameLoop;

  private trophy: Trophy;

  private player: Player;

  private score: Score;

  private lightning: Lightning;

  private heart: Heart;

  /**
   * Construct a new Game
   *
   * @param canvas The canvas HTML element to render on
   */
  public constructor(canvas: HTMLElement) {
    this.canvas = <HTMLCanvasElement>canvas;

    // Resize the canvas so it looks more like a Runner game
    this.canvas.width = window.innerWidth / 2;
    this.canvas.height = window.innerHeight;

    this.createRrandomObject();
    this.player = new Player(this.canvas);
    this.score = new Score();

    // Start the animation
    console.log('start animation');
    this.gameloop = new GameLoop(this);
    this.gameloop.start();
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public processInput(): void {
    this.player.move();
  }

  /**
   * Advances the game simulation one step. It may run AI and physics (usually
   * in that order)
   *
   * @param elapsed the time in ms that has been elapsed since the previous
   *   call
   * @returns `true` if the game should stop animation
   */
  public update(elapsed: number): boolean {
    // Move objects
    // TODO this is ... sooo much code for so little
    if (this.trophy !== null) {
      this.trophy.move(elapsed);

      if (this.player.isCollidingWithTrophy(this.trophy)) {
        this.score.setTotalScore(Score.TROPHY_SCORE);
        this.createRrandomObject();
      } else if (this.trophy.isCollidingWithCanvas()) {
        this.createRrandomObject();
      }
    }

    if (this.lightning !== null) {
      this.lightning.move(elapsed);

      if (this.player.isCollidingWithLighning(this.lightning)) {
        this.score.setTotalScore(Score.LIGHTNING_SCORE);
        this.createRrandomObject();
      } else if (this.lightning.isCollidingWithCanvas()) {
        this.createRrandomObject();
      }
    }

    if (this.heart !== null) {
      this.heart.move(elapsed);

      if (this.player.isCollidingWithHeart(this.heart)) {
        this.score.setTotalScore(Score.HEART_SCORE);
        this.createRrandomObject();
      } else if (this.heart.isCollidingWithCanvas()) {
        this.createRrandomObject();
      }
    }
    return false;
  }

  /**
   * Draw the game so the player can see what happened
   */
  public render(): void {
    // Render the items on the canvas
    // Get the canvas rendering context
    const ctx = this.canvas.getContext('2d');
    // Clear the entire canvas
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.writeTextToCanvas('UP arrow = middle | LEFT arrow = left | RIGHT arrow = right', this.canvas.width / 2, 40, 14);

    this.writeTextToCanvas(`Heart = ${Score.HEART_SCORE} | Trophy = ${Score.TROPHY_SCORE} | Lightning = ${Score.LIGHTNING_SCORE}`, this.canvas.width / 2, 60, 14);

    this.writeTextToCanvas(`Total score: ${this.score.getTotalScore()}`, this.canvas.width / 2, 90, 18, 'black');

    // Render the player
    // Center the image in the lane with the x coordinates
    this.player.draw(ctx);

    // Render the objects
    // Center the image in the lane with the x coordinates
    // this.trophy.draw(ctx);
    if (this.trophy !== null) {
      this.trophy.draw(ctx);
    } else if (this.lightning !== null) {
      this.lightning.draw(ctx);
    } else if (this.heart !== null) {
      this.heart.draw(ctx);
    }
  }

  /**
   * Writes text to the canvas
   *
   * @param text - Text to write
   * @param xCoordinate - Horizontal coordinate in pixels
   * @param yCoordinate - Vertical coordinate in pixels
   * @param fontSize - Font size in pixels
   * @param color - The color of the text
   * @param alignment - Where to align the text
   */
  public writeTextToCanvas(
    text: string,
    xCoordinate: number,
    yCoordinate: number,
    fontSize: number = 20,
    color: string = 'red',
    alignment: CanvasTextAlign = 'center',
  ): void {
    const ctx = this.canvas.getContext('2d');
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillStyle = color;
    ctx.textAlign = alignment;
    ctx.fillText(text, xCoordinate, yCoordinate);
  }

  /**
   * Generates a random integer number between min and max
   *
   * NOTE: this is a 'static' method. This means that this method must be called like
   * `Game.randomInteger()` instead of `this.randomInteger()`.
   *
   * @param min - minimal time
   * @param max - maximal time
   * @returns a random integer number between min and max
   */
  public static randomInteger(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
  }

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

  private createRrandomObject = () => {
    this.trophy = null;
    this.lightning = null;
    this.heart = null;

    const randomInt = Game.randomInteger(1, 3);
    switch (randomInt) {
      case 1:
        this.trophy = new Trophy(this.canvas);
        break;
      case 2:
        this.lightning = new Lightning(this.canvas);
        break;
      case 3:
        this.heart = new Heart(this.canvas);
        break;
      default:
        console.log('this object does not exists');
        break;
    }
  };
}

// Add EventListener to load the game whenever the browser is ready
window.addEventListener('load',
  () => new Game(document.getElementById('canvas')));
