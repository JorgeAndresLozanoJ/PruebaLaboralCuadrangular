import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamFormRegComponent } from './components/team-form-reg/team-form-reg.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { TeamTableComponent } from './components/team-table/team-table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/teams',
    pathMatch:'full'
  },
  {
    path: 'teams',
    component: TeamTableComponent
  },
  {
    path: 'teams/reg',
    component: TeamFormRegComponent
  },
  {
    path:'teams/act/:id',
    component:TeamFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
