export class Card {
    question: string;
    rightAnswer: string;
    answers: string[] = [];

    constructor(json: any) {
        this.question = json.question;
        this.rightAnswer = json.correct_answer;
        this.answers = json.incorrect_answers;
        this.answers.push(this.rightAnswer);
    }
}