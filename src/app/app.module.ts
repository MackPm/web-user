import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {CreateComponent} from './create/create.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component'
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormsModule } from '@angular/forms';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
