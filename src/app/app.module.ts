import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { DisplayComponent } from './components/display/display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculatorService } from './services/calculator.service';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroBoxesComponent } from './components/heroes/hero-boxes/hero-boxes.component';
import { HeroInputsComponent } from './components/heroes/hero-inputs/hero-inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    KeyboardComponent,
    DisplayComponent,
    HeroesComponent,
    HeroBoxesComponent,
    HeroInputsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
