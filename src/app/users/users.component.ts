import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usuarios: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3001/api/v1/users').subscribe((result) => {
      if (result.Code === 0) {
        this.usuarios = result.Users;
      }
    })

  }

  detailUser(userId){
    this.router.navigate(['/user/'+userId])
  }

}
