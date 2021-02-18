import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ApodComponent } from '../components/apod/apod.component';
import { CalculatorComponent } from '../components/calculator/calculator.component';
import { CervezasComponent } from '../components/cervezas/cervezas.component';
import { FormComponent } from '../components/form/form.component';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'calculator', component: CalculatorComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'apod/:date', component: ApodComponent },
    { path: 'cervezas', component: CervezasComponent },
    { path: 'form', component: FormComponent },
    { path: '', redirectTo: '/calculator', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
