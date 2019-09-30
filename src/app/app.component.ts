import { Component } from '@angular/core';
import { List } from "./list.model";
import { ConfigService } from "./config/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private configService : ConfigService
   ){

  }
  emailActive:boolean = false;
  textActive:boolean = false;
  errorMessage: string;
  successMessage: string;
  displayMessage = false;
  shareStatus: boolean = false;
  deleteStatus: boolean = false;
  list: List[] = [
    new List(false, 'Add and Edit yout list'),
  ];
  addItemToList(event){
    this.list.push(new List(false, event));
  }
  deleteButton(event){
    this.deleteStatus ? this.deleteStatus=false : this.deleteStatus = true;
  }
  deleteFromList(elem){
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].name=== elem){
        this.list.splice(i,1);
      }
    }
  }
  sendEmail(elem){
    this.shareStatus = false;
    let textMessage: string ='';
    for(let i=0;i<this.list.length;i++){
      textMessage+= `\n - ${this.list[i].name}`
    }
    const emailDetails = {
      sender: "automaticbublikrowres@yahoo.com",
      destination: elem.value,
      subject: "ToDoApp",
      text: `Thank you for using the ToDoApp\n\n Your list includes: ${textMessage} \n\n Please do not reply to this message, no one will read it and you would just waste your time. \n\n Have a great day Website: https://bublikrowres.github.io/ToDoApp/ `
    }

    this.configService.sendEmail(emailDetails).subscribe((data)=>{
      this.displayMessage = true;
      this.successMessage = 'Email sent successfully';
      setTimeout(() => {
        this.displayMessage = false;
        this.successMessage = '';
      }, 5000);

    },(err)=>{
      this.displayMessage = true;
      this.errorMessage = 'Error sending email';
      setTimeout(() => {
        this.errorMessage = '';
        this.displayMessage = false;
      }, 5000);
    });
  }
  
  sendText(elem){
    this.shareStatus = false;
    let textMessage: string = '';
    for(let i=0;i<this.list.length;i++){
      textMessage+= `\n - ${this.list[i].name}`
    }

    const sendText = {
      message : `Thank you for using the ToDoApp\n\n Your list includes: ${textMessage}`,
      senderNumber : elem.value
    }
    this.configService.sendText(sendText).subscribe((data)=>{
      this.displayMessage = true;
      this.successMessage = 'Text sent successfully';
      setTimeout(() => {
        this.displayMessage = false;
        this.successMessage = '';
      }, 5000);
    },(err)=>{
      this.displayMessage = true;
      this.errorMessage = 'Error sending text';
      setTimeout(() => {
        this.displayMessage = false;
        this.errorMessage = '';
      }, 5000);
    });
  }

}
