export default class Score {
    totalScore;
    static TROPHY_SCORE = 5;
    static LIGHTNING_SCORE = -10;
    static HEART_SCORE = 10;
    constructor() {
        this.totalScore = 0;
    }
    setTotalScore = (score) => {
        this.totalScore += score;
        console.log(this.totalScore);
    };
    getTotalScore = () => this.totalScore;
}
//# sourceMappingURL=Score.js.map