import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  result: any[];

  constructor(public service: BeersService) { }

  ngOnInit(): void {
    this.service.getRequest().subscribe(
      (data) => this.processData(data),
      (error) => this.processError(error)
    );
  }

  processData(data: any): void {
    this.result = data;
  }

  processError(error: any): void {
    console.log(error);
  }


}
