import { Component, OnInit } from '@angular/core';
import {CommonServicesService} from '../common-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  companyDetails:any;
  constructor(private commonServicesService:CommonServicesService, private router:Router) { }

  ngOnInit(): void {
    this.commonServicesService.getCompanies().subscribe((data)=>{
      this.companyDetails = data;
    })
  }
  redirectToContactPerson(){
    this.router.navigate(['contact-person']);
  }
}
