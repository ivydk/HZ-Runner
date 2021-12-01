/* eslint-disable jsdoc/require-returns */
import GameLoop from './GameLoop.js';
import Player from './Player.js';
import GoldTrophy from './GoldTrophy.js';
import LightningBolt from './LightningBolt.js';
import RedCross from './RedCross.js';
import SilverTrophy from './SilverTrophy.js';
import ScoringObject from './ScoringObject.js';
import Level from './Level.js';
import Level1 from './Level1.js';

/**
 * Main class of this Game.
 */
export default class Game {
  // The canvas
  private canvas: HTMLElement;

  private gameLoop: GameLoop;

  // The player on the canvas
  private player: Player;

  // The objects on the canvas
  private scoringObjects: ScoringObject[];

  private silverTrophy: SilverTrophy;

  private redCross: RedCross;

  private lightningBolt: LightningBolt;

  // Score
  private totalScore: number;

  private currentLevel: number;

  // Array of level objects
  private levels: Level[];

  /**
   * Construct a new Game
   *
   * @param canvas The canvas HTML element to render on
   */
  public constructor(canvas: HTMLElement) {
    this.levels = [];
    this.levels.push(new Level1(canvas));

    this.canvas = canvas;
    console.log(`Level ${this.currentLevel}`);
    // Start the animation
    console.log('start animation');
    this.gameLoop = new GameLoop(this);
    this.gameLoop.start();
  }

  /**
   * updates the level
   *
   * @param elapsed number of elapsed
   */
  public update(elapsed: number): boolean {
    if (this.levels[this.currentLevel].isCompleted()) {
      this.currentLevel += 1;
    }

    return this.levels[this.currentLevel].update(elapsed, this.gameLoop.frameCount);
  }

  /**
   * processes the input
   */
  public processInput(): void {
    this.levels[this.currentLevel].processInput();
  }

  /**
   * renders the game
   */
  public render(): void {
    this.levels[this.currentLevel].render();
  }
}
