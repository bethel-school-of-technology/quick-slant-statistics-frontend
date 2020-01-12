import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from '../models/userinfomodel'
//added during wire up
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.css']
})
export class DisplayUserDataComponent implements OnInit {

  user: UserInfoModel = new UserInfoModel({

    guid: "D21ds12x",
    uid: "1234abc",
    first_name: "John",
    last_name: "Doe",
    email: "email@email.com",
    username: "johndoe1234",
    password: "Idasn2x2#"
  });

  constructor(//added during wire up
    private http: HttpClient, private route: ActivatedRoute) { }

    private subscriber: any;

  ngOnInit() {//added during wire up
this.subscriber = this.route.params.subscribe(params => {
	       
	       this.http.get('/api/v1/customer/' + params.generate_uid).subscribe((data:any) => { //look at this "uid"
       		this.user = new UserInfoModel(data.customer);
      });
    });
}

}