import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  User:any;

  constructor(private http: HttpClient, private router: Router,private routerParameter:ActivatedRoute) { }

  ngOnInit(): void {
    this.routerParameter.paramMap.subscribe(params => {
      const parameter = params.get('idUser');
      this.http.get<any>('http://localhost:3001/api/v1/user/'+parameter).subscribe((response)=>{
        if(response.Code===0){
          this.User=response.User;
        }
      });
    })
  }

  deleteUser(userId){
    this.http.get<any>('http://localhost:3001/api/v1/userdel/'+userId).subscribe((response)=>{
      this.router.navigate(['/users'])
    })
  }

}
