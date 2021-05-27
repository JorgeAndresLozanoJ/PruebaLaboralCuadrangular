import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Team } from 'src/app/models/team';

import{TeamsService} from '../../services/teams.service';
@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {

  ids: any;
  constructor(
    private teamsService: TeamsService,
    private route: ActivatedRoute
  ) { }
  team:any[0]=[{
  }];
  ngOnInit(): void {
    const parametros = this.route.snapshot.params;
    this.ids=parametros.id;
    this.teamsService.getTeam(parametros.id).subscribe(
      res=>{
        this.team=res;
        console.log(this.team[0].Nombre);
      },
      err=> console.error(err)
    );
  }
  Actualizar(){
    const parametros = this.route.snapshot.params;
    this.ids=parametros.id;
    this.teamsService.updateTeam(parametros.id, this.team[0]).subscribe(
      res=>{
        console.log("Se actualizó el equipo: "+this.team.Nombre)
      }
    )

  }

}
