import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AppGuard {
    constructor(private router:Router){}
  canActivate() {
    let loggedIn = sessionStorage.getItem('loggedIn');
    if(loggedIn){
        return true;
    }
    else{
    alert('Please login');
    this.router.navigate(['']);
    return false;
    }
  }
}