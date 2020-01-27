import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team';

@Component({
  selector: 'app-viewteams',
  templateUrl: './viewteams.component.html',
  styleUrls: ['./viewteams.component.css']
})
export class ViewteamsComponent implements OnInit {

  Teams: Team[];
  @Input() dataPath: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Team[]>( 'http://localhost:3050/view').subscribe(team => {
    this.Teams = team;
    console.log(team);
    });
    console.log(this.Teams);
    }
}
