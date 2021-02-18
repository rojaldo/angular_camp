import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

import { FormService } from 'src/app/services/form.service';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  paises:any [] = [];
  user: User;
  myPattern = '[a-zA-ZÑñÁÉÍÓÚáéíóúüÜ]{2,20}';
  myPatternEmail = '[a-z0-9._%+-]+@[a-z0-9.-]+[.]{1}[a-z]{2,3}';

  //validación reactiva
  formSubmitted = false;
  fn='firstName';
  ln='lastName';
  e='email';

  testForm = this.fb.group({
    firstName: ['',[Validators.required, Validators.pattern(this.myPattern)]],
    lastName: ['',[Validators.required, Validators.pattern(this.myPattern)]],
    email: ['',[Validators.required, Validators.pattern(this.myPatternEmail)]],
  });

  constructor(public service: FormService, private fb:FormBuilder) { }
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
      this.paises.push(data[i].name);
      //this.paises.push(data[i].translations.es); ESTO NO FUNCIONA NO SÉ PORQUÉ
      console.log(this.paises);
    }
  }

  processError(error:any):void{
    console.log(error);
  }

  search = (text$: Observable<string>) =>
  
    text$.pipe(
      
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] : this.paises.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  //validación reactiva
  isFieldValid(field: string): any{
    return(
      this.testForm.get(field).errors && this.testForm.get(field).touched || 
      this.testForm.get(field).untouched && 
      this.formSubmitted && this.testForm.get(field).errors
    )
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.testForm.valid) {
      alert('VALID');
    } else {
      alert('NOT VALID');
    }
  }
}