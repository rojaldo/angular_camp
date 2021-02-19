import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ApodComponent } from '../components/apod/apod.component';
import { BeersComponent } from '../components/beers/beers.component';
import { CalculatorComponent } from '../components/calculator/calculator.component';
import { CountriesComponent } from '../components/countries/countries.component';
import { FormComponent } from '../components/form/form.component';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { TrivialComponent } from '../components/trivial/trivial.component';

const routes: Routes = [
    { path: 'calculator', component: CalculatorComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'apod/:date', component: ApodComponent },
    { path: 'beers', component: BeersComponent },
    { path: 'form', component: FormComponent },
    { path: 'countries', component: CountriesComponent },
    { path: 'trivial', component: TrivialComponent },
    { path: '', redirectTo: '/countries', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }


]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }