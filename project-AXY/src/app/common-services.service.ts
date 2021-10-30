import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

const maiRoute:string = 'https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/';
const route = {
  companiesURL: `${maiRoute+'companies'}`,
  contactPerson:`${maiRoute+'contacts'}`,
  userList: `${maiRoute+'users'}`
}
@Injectable({
  providedIn: 'root'
})

export class CommonServicesService {
  constructor( private http : HttpClient) { }
  getCompanies(){
    return new Observable((observer)=>{
      this.http.get(route.companiesURL).subscribe(
        (data: unknown)=>{
          observer.next(data);
          observer.complete()
        }
      )
      // ()=>{}
    })
  }
  getContactPerson(updateContactPerson?: any){
    return new Observable((observer)=>{
      this.http.get(route.contactPerson).subscribe(
        (data: any)=>{
          observer.next(data);
          observer.complete()
        }
      )
      // ()=>{}
    })
  }
  getUserList(){
    return new Observable((observer)=>{
      this.http.get(route.userList).subscribe(
        (data: any)=>{
          observer.next(data);
          observer.complete()
        }
      )
      // ()=>{}
    })
  }
}
