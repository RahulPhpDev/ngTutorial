import { Component, OnInit,Input } from '@angular/core';
import {Globals} from '../../globals';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private lang: string;


  constructor(private globals: Globals) { 

		 this.lang = globals.lang;
  }

  ngOnInit() { 
    

  }
  changeLanguage(){
  	console.log('hii');
  }

}
