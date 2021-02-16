import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() signal = new EventEmitter<string>(); //1. este atributo se comporta como output que hace evenemitter, encapsula el dato que queremos mandar

  constructor() { }

  ngOnInit(): void {
  }

  haceClick(value){
      this.signal.emit(value); //2. esto se manda al output y se mete en el eventEmitter
  }

}
