export class TestCard{
    question: string;
    answers: Array<string>;   
    rightAnswer: number;
    isActive: boolean;

    constructor(question: string, answers: Array<string>, rightAnswer: number, isActive: boolean){
        this.question = question;
        this.answers = answers;
        this.rightAnswer = rightAnswer;
        this.isActive = isActive;
    }

    CheckCorrectAnswer(index: number): boolean{
        return index === this.rightAnswer ? true : false;
    }
}