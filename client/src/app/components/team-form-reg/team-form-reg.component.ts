import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';

import{TeamsService} from '../../services/teams.service';

@Component({
  selector: 'app-team-form-reg',
  templateUrl: './team-form-reg.component.html',
  styleUrls: ['./team-form-reg.component.css']
})
export class TeamFormRegComponent implements OnInit {
  constructor(private teamsService: TeamsService) { }
  team:Team={
    Nombre:"Nombre",
    ParEmpatados : 0,
    ParGanados : 0,
    ParPerdidos : 0 
  };
  ngOnInit(): void {
  }
  Registrar(){
    this.teamsService.SaveTeam(this.team).subscribe(
      res=>{
        console.log("Se guardó el equipo: "+this.team.Nombre)
      }
    )

  }

}
