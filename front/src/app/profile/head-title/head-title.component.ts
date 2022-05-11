import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-head-title',
  templateUrl: './head-title.component.html',
  styleUrls: ['./head-title.component.scss']
})
export class HeadTitleComponent{
@Input() user:string="";
@Input() id:number=0;
@Output() clickHandler=new EventEmitter();
  constructor() { }
  onClick(){
    this.clickHandler.emit(this.id)
  }

}
