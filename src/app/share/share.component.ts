import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  emailActive:boolean = false;
  textActive:boolean = false;
  shareStatus: boolean = false;

  @Output() emailEvent = new EventEmitter();
  @Output() smsEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendEmail(elem){
    this.shareStatus = false;
    // console.log(elem.value)
    this.emailEvent.emit(elem.value);
  }
  
  sendText(elem){
    this.shareStatus = false;
    // console.log(elem.value)
    this.smsEvent.emit(elem.value);
  }

}
