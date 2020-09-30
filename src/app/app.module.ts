import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDialogModule, MatRippleModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './components/dialog/dialog.component';
import { HomePageModule } from './home-page/home-page.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DialogComponent,  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    MatToolbarModule,
    MatDialogModule,
    HomePageModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent],     
  
 

})
export class AppModule { }
