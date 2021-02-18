import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { FormServiceService } from 'src/app/form-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  user: User;
  formSubmitted = false;

  countries = [];
  public model: any;
  fn = 'firstName';
  ln = 'lastName';
  e = 'email';

  namePattern = '[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+';
  emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+[.]{1}[a-z]{2,3}';

  testForm = this.fb.group({
    firstName: [
      '',
      [Validators.required, Validators.pattern(this.namePattern)],
    ],
    lastName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    country: ''
  });

  constructor(private fb: FormBuilder, private formService: FormServiceService) {}

  ngOnInit(): void {
    this.user = new User('', '', '');
    this.formService.getCountries().subscribe((data) => {
      this.countries = this.processData(data);
      console.log(this.countries);
    });
  }
  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map((term) =>
      term.length < 2
        ? []
        : this.countries
            .filter(
              (v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
            .slice(0, 10)
    )
  );
  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
    // user.firstName = form.firstName
  }

  isFieldValid(field: string): any {
    return (
      (this.testForm.get(field).errors && this.testForm.get(field).touched) ||
      (this.testForm.get(field).untouched &&
        this.formSubmitted &&
        this.testForm.get(field).errors)
    );
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.testForm.valid) {
      alert('VALID');
    } else {
      alert('NOT VALID');
    }
  }

  processData(data){
    let array = []
    data.forEach(element => {
      array.push( element.name );
    });
    return array;
  }
}
