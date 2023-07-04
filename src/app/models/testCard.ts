export class TestCard{
    question: string;
    answers: Answer[]; 
    isActive: boolean;
    rightAnswer: boolean | null;

    constructor(question: string, answers: Answer[], rightAnswer: boolean | null, isActive: boolean){
        this.question = question;
        this.answers = answers;
        this.isActive = isActive;
        this.rightAnswer = rightAnswer;
    }
}

export class Answer{
    answer: string;
    isChecked: boolean;
    isRight: boolean | null;

    constructor(answer: string, isChecked: boolean, isRight: boolean | null){
        this.answer = answer;
        this.isChecked = isChecked;
        this.isRight = isRight;
    }
}