export class TestCard{
    question: string;
    answers: Array<string>; 
    isActive: boolean;
    rightAnswer: boolean | null;

    constructor(question: string, answers: Array<string>, rightAnswer: boolean | null, isActive: boolean){
        this.question = question;
        this.answers = answers;
        this.isActive = isActive;
        this.rightAnswer = rightAnswer;
    }
}