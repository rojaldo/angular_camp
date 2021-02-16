import { Component,EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
signal = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value:string){
    this.signal.emit(value);
  }

}
