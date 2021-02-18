import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-apod-date-picker',
  templateUrl: './apod-date-picker.component.html',
  styleUrls: ['./apod-date-picker.component.scss']
})
export class ApodDatePickerComponent implements OnInit {

  @Output() fechaSignal = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  verFoto(fecha:any):void{
    console.log(fecha);
    const url = '&date=' + fecha.year + '-' + fecha.month + '-' + fecha.day;
    this.fechaSignal.emit(url);
  }

}
