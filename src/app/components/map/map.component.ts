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
  ngOnInit(): void {
    this.formServiceService.getCountries().subscribe((data) => {
      this.countries = this.processData(data);
      this.countriesAux = this.countries;
    });
  }
  processData(data) {
    let array = [];
    data.forEach((element) => {
      array.push(element);
    });
    return array;
  }
  filterData(input) {
    this.countriesAux = this.countries.filter((e) => {
      return e.name.toLowerCase().includes(input.value.toLowerCase());
    });
  }

  filterData2(input) {
    this.countriesAux = this.countries.map((e) => {
      return e.name.toLowerCase().includes(input.value.toLowerCase());
    });
  }

  sortByName($event) {
    if ($event.target.checked) {
      this.countriesAux = this.countriesAux.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    else{
      this.countriesAux = this.countriesAux.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
  }
}
