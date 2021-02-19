import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormServiceService } from 'src/app/form-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor(private formServiceService: FormServiceService) {}
  countries = [];
  countriesAux = [];
  value = 0;
  highValue = 100000;
  options: Options = {
    floor: 0,
    ceil: 18000000,
    step: 1000
  };
  ngOnInit(): void {
    this.formServiceService.getCountries().subscribe((data) => {
      this.countries = this.processData(data);
      this.countriesAux = this.countries;
    });
  }
  processData(data) {
    let array = [];
    data.filter( e =>{
      if(e.name && e.flag && e.area && e.population)
        return e
    }).forEach((element) => {
      array.push(element);
    });
    return array;
  }
  filterData(input) {
    this.countriesAux = this.countries.filter((e) => {
      return e.name.toLowerCase().includes(input.value.toLowerCase());
    });
  }


  sortByName($event) {
    if ($event.target.checked) {
      this.countriesAux = this.countriesAux.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    else{
      this.countriesAux = this.countriesAux.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
  }

  sortByArea($event) {
    if ($event.target.checked) {
      this.countriesAux = this.countriesAux.sort((a, b) => {
        return b.area - (a.area);
      });
    }
    else{
      this.countriesAux = this.countriesAux.sort((a, b) => {
        return a.area - (b.area);
      });
    }
  }

  sortByPopulation($event) {
    if ($event.target.checked) {
      this.countriesAux = this.countriesAux.sort((a, b) => {
        return b.population- (a.population);
      });
    }
    else{
      this.countriesAux = this.countriesAux.sort((a, b) => {
        return a.population - (b.population);
      });
    }
  }

  handleChange(value: number, highValue: number): void {
    this.countriesAux = this.countries.filter((e) => {
      return e.area >= value && e.area <= highValue;
    });
  }
}
