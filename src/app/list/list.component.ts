import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor() { }
  isCompleted:boolean = false;
  @Input() done : boolean = true;
  @Input() name : string = 'nfowbfowebfouwou';
  @Input() deleteStatus : boolean = true;

  @Output() deleteEvent = new EventEmitter();

  ngOnInit() {
  }

  deleteEntry(){
    this.deleteEvent.emit("delete");
  }
  completed(event){
    // console.log(event.toElement.classList);
    // let x = event.toElement.classList;
    // console.log(x);
    // let check = event.toElement.classList.includes("green");
    // console.log(check);
    // console.log(event.toElement.classList);
    if(this.isCompleted){
      this.isCompleted = false;
      event.toElement.classList.remove('green');
    } else {
      this.isCompleted = true;
      event.toElement.classList.add('green');

    }
  }
}
