import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {

	isLoggedIn =  new EventEmitter();
  constructor() { }

  login(){
  	console.log('login srevice');
  }
}
