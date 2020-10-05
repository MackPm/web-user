import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  nombre: string;
  apPaterno: string;
  apMaterno: string;
  rfc: string;
  fechaNacimiento: Date;



  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  }


  CreateUser() {
    const body = {
      nombre: this.nombre,
      ApellidoPaterno: this.apPaterno,
      ApellidoMaterno: this.apMaterno,
      RFC: this.rfc,
      FechaNacimiento: this.fechaNacimiento,
    }



    const createUser=this.http.post<any>('http://localhost:3001/api/v1/user',body).subscribe((result)=>{
      if(result.Code===0){
        console.log("se creo correctamente");    
        this.router.navigate(['/users']);    
      }
    })
  }


}
