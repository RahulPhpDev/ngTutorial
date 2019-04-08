import { Component, OnInit } from '@angular/core';
import {Globals} from '../globals';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private globals: Globals) { 
  	this.lang = globals.lang;
  }

  ngOnInit() {
  }

}
