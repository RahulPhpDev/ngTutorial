import { Component, OnInit } from '@angular/core';

import {Globals} from '../globals';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private lang: string;

  constructor(private globals: Globals,private cookieService: CookieService) { 
      this.lang = globals.lang;
  }


  ngOnInit() {
  	this.lang = 'eng';
  

  //  this.cookieValue = this.cookieService.get('lang');
    if(  this.cookieService.get('lang') )  this.globals.lang  =  this.cookieService.get('lang');  

    else this.cookieService.set('lang', 'eng');
  }

	changeLanguage(langC){
    //var chnagLang = (langC == 'eng') ? 'hindi' : 'eng';
   // console.log(chnagLang);
     this.globals.lang = langC;
     this.cookieService.set('lang', langC);
	}

 
}
