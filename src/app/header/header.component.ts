import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  addActive : boolean = false;
  plusActive: boolean = true;
  toDoValue : string;
  @Output() sendAddEvent = new EventEmitter();
  editActive : boolean = false;
  @Output() sendEdit = new EventEmitter();
  addItem = {};
  constructor() { }

  showAdd(){
    this.plusActive = false;
    this.addActive = true;
    
    if(this.editActive === true){
      this.editActive = false;
    this.sendEdit.emit(this.editActive);
    }
  }
  addItemToList(elem){
    // console.log(elem)
    if(elem === ""){
      //console.log("no entry");
    } else {
      this.addActive = false;
      this.plusActive = true;
      this.toDoValue = elem;
      this.sendAddEvent.emit(this.toDoValue);
    }
  }

  showEdit(){
    this.editActive ? this.editActive=false : this.editActive = true;
    this.sendEdit.emit(this.editActive);
  }
  ngOnInit() {
  }

}
