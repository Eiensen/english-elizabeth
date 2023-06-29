export class TestCard{
    question: string;
    answers: Array<string>;   
    rightAnswer: number;

    constructor(question: string, answers: Array<string>, rightAnswer: number){
        this.question = question;
        this.answers = answers;
        this.rightAnswer = rightAnswer;
    }

    CheckCorrectAnswer(index: number): boolean{
        return index === this.rightAnswer ? true : false;
    }
}