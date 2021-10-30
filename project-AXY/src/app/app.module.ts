import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DialogBoxComponent} from './dialog-box/dialog-box.component';
import {
  MatButtonModule
} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
// , MatDialogModule, MatInputModule, MatTableModule,
//   MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
import {HttpClient,HttpClientModule } from '@angular/common/http';
import { ContactPersonComponent } from './contact-person/contact-person.component';
import {AppGuard} from './app.guard';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    ContactPersonComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCardModule, 
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  exports:[MatButtonModule, MatCardModule,
    MatInputModule, MatTableModule,MatDialogModule,
    BrowserAnimationsModule],
  providers: [HttpClient, AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
