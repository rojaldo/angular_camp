import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { DisplayComponent } from './components/display/display.component';
import { CalculatorService } from './services/calculator.service';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesFormComponent } from './components/heroes-form/heroes-form.component';
import { ApodComponent } from './components/apod/apod.component';
import { ApodService } from './services/apod.service';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { ApodDatePickerComponent } from './components/apod-date-picker/apod-date-picker.component';
import { ApodShowComponent } from './components/apod-show/apod-show.component';
import { CervezasComponent } from './components/cervezas/cervezas.component';
import { CervezaService } from './services/cervezas.service';
import { AbvPipe } from './pipes/abv.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    KeyboardComponent,
    DisplayComponent,
    HeroesComponent,
    HeroesListComponent,
    HeroesFormComponent,
    ApodComponent,
    ApodDatePickerComponent,
    ApodShowComponent,
    CervezasComponent,
    AbvPipe,
    FormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    YouTubePlayerModule, //se añade aquí para todo el módulo, con su correspondiente import arriba una vez instalado (npm i @angular/youtube-player)
    NgxSliderModule //se añade aquí para todo el módulo, con su correspondiente import arriba una vez instalado (npm i @angular-slider/ngx-slider)
  ],
  providers: [CalculatorService, ApodService, CervezaService/* //7. mismo problema, se crea a nivel global y no a nivel de componente */],
  bootstrap: [AppComponent]
})
export class AppModule { }
