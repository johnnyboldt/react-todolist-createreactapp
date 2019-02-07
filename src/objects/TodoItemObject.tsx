export class TodoItemObject {
    public userId: number;
    public id: number;
    public title: string;
    public body: string;
    public completed: boolean;
    constructor(body: string, completed: boolean, userId: number, id: number, title: string){
        this.body=body;
        this.completed=completed;
        this.userId=userId;
        this.id=id;
        this.title=title;
    }
}