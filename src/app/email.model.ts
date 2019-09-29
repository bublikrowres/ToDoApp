export class Email {
    public sender: string;
    public destination: string;
    public subject: string;
    public text: string;

    constructor(sender:string,destination:string,subject:string,text:string) {
        this.sender = sender,
        this.destination = destination,
        this.subject = subject,
        this.text = text
    }
}
  