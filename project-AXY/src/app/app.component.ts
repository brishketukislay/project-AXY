import { Component } from '@angular/core';
import {Router,ActivatedRoute, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-AXY';
  constructor(private router:Router, ){
  }
  logOut(){
    sessionStorage.removeItem('loggedIn');
    this.router.navigate(['']);
  }
}
