export class Todo {
  constructor(
    public _id: string,
    public name: string,
    public note: string,
    public done: boolean,
    public user: string
  ){}
}
