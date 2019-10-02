import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonlistComponent } from './components/personlist/personlist.component';

const routes: Routes = [
  { path: 'app-personlist', component: PersonlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
