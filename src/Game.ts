import GameLoop from './GameLoop.js';
import Player from './Player.js';
import GoldTrophy from './GoldTrophy.js';
import LightningBolt from './LightningBolt.js';
import RedCross from './RedCross.js';
import SilverTrophy from './SilverTrophy.js';
import ScorigObjects from './ScoringObjects.js';
import Heart from './Heart.js';

/**
 * Main class of this Game.
 */
export default class Game {
  // The canvas
  private canvas: HTMLCanvasElement;

  private gameloop: GameLoop;

  // The player on the canvas
  private player: Player;

  // The objects on the canvas
  private scoringObject: ScorigObjects;

  // Score
  private totalScore: number;

  /**
   * Construct a new Game
   *
   * @param canvas The canvas HTML element to render on
   */
  public constructor(canvas: HTMLElement) {
    this.canvas = <HTMLCanvasElement>canvas;

    // Resize the canvas so it looks more like a Runner game
    this.canvas.width = window.innerWidth / 3;
    this.canvas.height = window.innerHeight;

    // TODO create multiple objects over time
    this.createRandomScoringObject();

    // Set the player at the center
    this.player = new Player(this.canvas);

    // Score is zero at start
    this.totalScore = 0;

    // Start the animation
    console.log('start animation');
    this.gameloop = new GameLoop(this);
    this.gameloop.start();
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public processInput(): void {
    // Move player
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
    // TODO this is ... sooo much code for so little
    if (this.scoringObject !== null) {
      this.scoringObject.move(elapsed);

      if (this.player.collidesWith(this.scoringObject)) {
        this.totalScore += this.scoringObject.getPoints();
        this.createRandomScoringObject();
      } else if (this.scoringObject.collidesWithCanvasBottom()) {
        this.createRandomScoringObject();
      }
    }
    // move object
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

    this.drawScore();

    this.player.draw(ctx);

    if (this.scoringObject !== null) {
      this.scoringObject.draw(ctx);
    }
  }

  /**
   * Draw the score on a canvas
   */
  private drawScore(): void {
    this.writeTextToCanvas(`Score: ${this.totalScore}`, this.canvas.width / 2, 80, 16);
  }

  /**
   * Create a random scoring object and clear the other scoring objects by setting them to `null`.
   */
  private createRandomScoringObject(): void {
    this.scoringObject = null;

    const random = Game.randomInteger(1, 5);

    if (random === 1) {
      this.scoringObject = new GoldTrophy(this.canvas);
    }
    if (random === 2) {
      this.scoringObject = new SilverTrophy(this.canvas);
    }
    if (random === 3) {
      this.scoringObject = new RedCross(this.canvas);
    }
    if (random === 4) {
      this.scoringObject = new LightningBolt(this.canvas);
    }
    if (random === 5) {
      this.scoringObject = new Heart(this.canvas);
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
}
