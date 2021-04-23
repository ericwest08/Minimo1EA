import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonComponent} from './person/person.component';
import {PersonFormComponent} from './person-form/person-form.component';
import { PersonPostComponent } from './person-post/person-post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/institution' },
  { path: 'people', component: PersonComponent},
  { path: 'people/:nombre', component: PersonPostComponent},
  { path: '**', component: PersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
