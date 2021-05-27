import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { TeamTableComponent } from './components/team-table/team-table.component';

import {TeamsService} from './services/teams.service';
import { TeamFormRegComponent } from './components/team-form-reg/team-form-reg.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TeamFormComponent,
    TeamTableComponent,
    TeamFormRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
