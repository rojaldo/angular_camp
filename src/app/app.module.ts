import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { DisplayComponent } from './components/display/display.component';
import { CalculatorService } from './services/calculator.service';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { ApodComponent } from './components/apod/apod.component';
import { ApodService } from './services/apod.service';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ApodDatePickerComponent } from './components/apod-date-picker/apod-date-picker.component';
import { ApodShowComponent } from './components/apod-show/apod-show.component';
import { BeersComponent } from './components/beers/beers.component';
import { AbvPipe } from './pipes/abv.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    KeyboardComponent,
    DisplayComponent,
    HeroesComponent,
    HeroesListComponent,
    HeroFormComponent,
    ApodComponent,
    ApodDatePickerComponent,
    ApodShowComponent,
    BeersComponent,
    AbvPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [CalculatorService, ApodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
