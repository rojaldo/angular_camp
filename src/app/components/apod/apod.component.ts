import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  result: any = {};
  apiLoaded = false;

  constructor(public service: ApodService) { }

  ngOnInit(): void {
    if (!this.apiLoaded){
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.service.getRequest().subscribe(
      (data) => this.processData(data),
      (error) => this.processError(error)
    );
  }

  processData(data: any): void {
    this.result = data;
    if (this.result.media_type === 'video'){
      this.result.id = this.getId(this.result.url);
    }
  }

  processError(error: any): void {
    console.log(error);
  }

  handleNavigate(value: any): void {
    console.log(value);
    // date=yyyy-mm-dd
    const aux = value.year + '-' + value.month + '-' + value.day;
    this.service.getRequest(aux).subscribe(
      (data) => this.processData(data),
      (error) => this.processError(error)
    );
  }

  getId(url: string): any{
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[7].length === 11)? match[7] : false;
  }

}
