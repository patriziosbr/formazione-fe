import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyToolBarComponent } from './my-tool-bar/my-tool-bar.component';
import { MaterialItemModule } from './material-item/material-item.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
const modules = [
  BrowserModule,
  MatToolbarModule,
  MatButtonModule,
  MaterialItemModule,
  BrowserAnimationsModule,
  MatDialogModule,
  MatFormFieldModule,
  AppRoutingModule
]

@NgModule({
  declarations: [
    AppComponent,
    MyToolBarComponent
  ],
  imports: [...modules],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
