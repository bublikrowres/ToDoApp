import { Component } from '@angular/core';
import { List } from "./list.model";
import { ConfigService } from "./config/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  deleteStatus: boolean = false;
  errorMessage: string;
  successMessage: string;
  displayMessage = false;

  constructor(
    private configService : ConfigService
   ){

  }
  list: List[] = [
    new List(false, 'Add and Edit yout list'),
  ];

  displaySuccess(elem){
    this.displayMessage = true;
    this.successMessage = elem + ' sent successfully';
  }
  displayError(elem){
    this.displayMessage = true;
    this.errorMessage = 'Error sending ' + elem;
  }
  resetShare(){
    this.errorMessage = '';
    this.successMessage = '';
    this.displayMessage = false;
  }
  
  addItemToList(event){
    this.list.push(new List(false, event));
  }
  deleteButton(){
    this.deleteStatus ? this.deleteStatus=false : this.deleteStatus = true;
  }
  deleteFromList(elem){
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].name=== elem){
        this.list.splice(i,1);
      }
    }
  }

  email(event){
    // console.log(event);
    let textMessage: string ='';
    for(let i=0;i<this.list.length;i++){
      textMessage+= `\n - ${this.list[i].name}`
    }
    const emailDetails = {
      sender: "automaticbublikrowres@yahoo.com",
      destination: event,
      subject: "ToDoApp",
      text: `Thank you for using the ToDoApp\n\n Your list includes: ${textMessage} \n\n Please do not reply to this message, no one will read it and you would just waste your time. \n\n Have a great day \n\n Website: https://bublikrowres.github.io/ToDoApp/ `
    }
    this.configService.sendEmail(emailDetails).subscribe((data)=>{
      this.displaySuccess('Email');
      setTimeout(() => {
        this.resetShare()
      }, 5000);
      // console.log(data)
    },(err)=>{
      this.displayError('email');
      setTimeout(() => {
        this.resetShare()
      }, 5000);
      // console.log(err)
    });
  }

  sms(event){
    // console.log(event);
    let textMessage: string = '';
    for(let i=0;i<this.list.length;i++){
      textMessage+= `\n - ${this.list[i].name}`
    }
    const sms = {
      message : `Thank you for using the ToDoApp\n\n Your list includes: ${textMessage}`,
      sendNumber : event
    }
    // console.log(sms);
    this.configService.sendText(sms).subscribe((data)=>{
      this.displaySuccess('Text');
      setTimeout(() => {
        this.resetShare()
      }, 5000);
      // console.log(data)
    },(err)=>{
      this.displayError('text');
      setTimeout(() => {
        this.resetShare()
      }, 5000);
      // console.log(err)
    });

  }
}
