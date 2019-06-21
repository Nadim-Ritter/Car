import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { CarOverviewComponent } from './car-overview/car-overview.component';

const routes: Routes = [
  {path: '', component: CarOverviewComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
