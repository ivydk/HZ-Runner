export default class Score {
  private totalScore: number;

  // point of scoring objects
  public static readonly TROPHY_SCORE = 5;

  public static readonly LIGHTNING_SCORE = -10;

  public static readonly HEART_SCORE = 10;

  /**
   * this class counts the total score
   */
  public constructor() {
    this.totalScore = 0;
  }

  public setTotalScore = (score: number): void => {
    this.totalScore += score;
    console.log(this.totalScore);
  };

  public getTotalScore = (): number => this.totalScore;
}
