
export class Answer {
    answer: string;
    isChecked: boolean;
    isRight: boolean | null;

    constructor(answer: string, isChecked: boolean, isRight: boolean | null) {
        this.answer = answer;
        this.isChecked = isChecked;
        this.isRight = isRight;
    }
}
