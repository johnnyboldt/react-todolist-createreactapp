export class TodoItemObject {
    public text: string;
    public completed: boolean;
    constructor(text: string, completed: boolean){
        this.text=text;
        this.completed=completed;
    }
}