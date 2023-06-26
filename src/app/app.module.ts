import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppMarvelComponent } from './app-marvel/app-marvel.component';
import { AppAuditComponent } from './app-audit/app-audit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {  MatDialogModule} from '@angular/material/dialog';
import { AppMarverDialogComponent } from './app-marver-dialog/app-marver-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AppMarvelComponent,
    AppAuditComponent,
    AppMarverDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
