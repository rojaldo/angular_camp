import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {


  @Output() signal = new EventEmitter();

  constructor() { }
  public text: any = "";

  ngOnInit(): void {
  }

  
  calculatoradd(s: any) {
    this.text += s;
    this.signal.emit(s);
  }

  reset() {
    this.text = ""
  }
}
