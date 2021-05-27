import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Team } from 'src/app/models/team';

import{TeamsService} from '../../services/teams.service';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnInit {
  Puntos : number[] = [];
  teams:any=[];
  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    this.teamsService.getTeams().subscribe(
      res => {
        this.teams= res;
        console.log(Object.keys(this.teams).length);   
         for(let i=0 ;i<Object.keys(this.teams).length;i++)
          {this.teams[i].Puntos = this.teams[i].ParGanados*3 + this.teams[i].ParEmpatados;}
       console.log(this.teams);   
      },
      err => console.error(err)
    )    
  }
  borrar(id: string){
    this.teamsService.deleteTeam(id).subscribe(
      res=>{ console.log("Borrando"+id);
      location.reload();
      },
      err=> console.error(err)
    );
  } 

}
