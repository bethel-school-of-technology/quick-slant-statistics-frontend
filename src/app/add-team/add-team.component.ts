import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../models/team';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {


  divisions = ['AFC East', 'AFC North', 'AFC South', 'AFC West', 'NFC East', 'NFC North', 'NFC South', 'NFC West'];

  model = new Team(1, '', '', 0, 0);

  submitted = false;

  onSubmit() { this.submitted = true;

  }


  constructor() { }

  ngOnInit() {
  }

}
