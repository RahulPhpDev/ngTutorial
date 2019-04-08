import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommandComponent } from './command/command.component';
import { HeaderComponent } from './header/header.component';
import { QuizComponent } from './quiz/quiz.component';


import { BindingModule } from './binding/binding.module';
import { Globals } from './globals';

import { CookieService } from 'ngx-cookie-service';



@Injectable () 

//console.log('hi');

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CommandComponent,
    HeaderComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BindingModule
  ],
  providers: [Globals,CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
