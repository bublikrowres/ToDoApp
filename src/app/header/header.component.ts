import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  addActive:boolean = false;
  plusAndEdit:boolean = true;
  toDoValue : string;
  @Output() sendAddEvent = new EventEmitter();
  editActive : boolean = false;
  @Output() sendEdit = new EventEmitter();
  constructor() { }


  addItemToList(elem){
    // console.log(elem)
    if(elem === ""){
      //console.log("no entry");
    } else {
      this.toDoValue = elem;
      this.sendAddEvent.emit(this.toDoValue);
    }
  }

  showEdit(){
    this.sendEdit.emit(this.editActive);
  }
  ngOnInit() {
  }

}
