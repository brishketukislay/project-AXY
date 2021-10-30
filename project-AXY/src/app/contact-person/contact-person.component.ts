import { Component, OnInit } from '@angular/core';
import {CommonServicesService} from '../common-services.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.scss']
})
export class ContactPersonComponent implements OnInit {
  contactPersonList:any;
  addPersonFlag:boolean = true;
  update:boolean = false;
  enableEdit = false;
  enableEditIndex = null;
  showDialog:any = false;
  addPersonForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    id:new FormControl('',[Validators.required]),
  })
  updatePersonForm = new FormGroup({
    updateName:new FormControl('',[Validators.required]),
    updatePhone: new FormControl('',[Validators.required]),
    updateCountry: new FormControl('',[Validators.required]),
  })
  constructor(private commonServicesService:CommonServicesService, public dialog: MatDialog) {
    
   }

  ngOnInit(): void {
    this.getContactPerson();
  }
  getContactPerson(addContractPerson?:any){
    this.commonServicesService.getContactPerson(addContractPerson).subscribe((data)=>{
      this.contactPersonList = data;
      if(addContractPerson){
        this.contactPersonList.push(addContractPerson);
      }
    })
  }
  updateContactPerson(id: any){
    if(this.updatePersonForm.valid){
    this.contactPersonList.forEach((element: any) => {
      if(element.id === id){
        element.name = this.updatePersonForm.get('updateName')?.value;
        element.phone = this.updatePersonForm.get('updatePhone')?.value;
        element.country = this.updatePersonForm.get('updateCountry')?.value;
      }
    });
    this.showDialog = !this.showDialog;
  }
  else{
    alert("Incorrect values");
  }
  }
  delete(id: any){
    if(this.contactPersonList.length == 1)
    {
      this.contactPersonList =[];
    }
    else if(id<=this.contactPersonList.length){
      this.contactPersonList.splice(id,1);}
  }
  get name(){
    return this.addPersonForm.get('name')?.value;
  }
  get phone(){
    return this.addPersonForm.get('phone')?.value;
  }
  get country(){
    return this.addPersonForm.get('country')?.value;
  }
  get id(){
    return this.addPersonForm.get('id')?.value;
  }
  onSubmit(){
    if(this.addPersonForm.valid){
    this.getContactPerson(this.addPersonForm.value);
    this.addPersonFlag = !this.addPersonFlag;}
    else{
      alert("Incorrect values");
    }
  }
}
