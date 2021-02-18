import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

import { FormService } from 'src/app/services/form.service';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  paises:any [] = [];
  user: User;
  myPattern = '[a-zA-Z]{2,20}';
  myPatternEmail = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}';

  constructor(public service: FormService) { }
  ngOnInit() {
      this.user = new User('', '', '', '');
      this.service.getRequest().subscribe(
        //parámetros predefinidos del subscribe del Observable y que funcione
        (data) => this.processData(data), //ejecución bien
        (error) => this.processError(error) //ejecución falla
      );
  }
  submitForm(form: any): void {
      console.log('Form Data: ');
      console.log(form);
      // user.firstName = form.firstName
  }

  processData(data:any):void{
    //respuesta del servicio
    
    for (let i=0; i<data.length; i++){
      this.paises.push(data[i].translations.es);
    }
    console.log(this.paises);
  }

  processError(error:any):void{
    console.log(error);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.paises.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}