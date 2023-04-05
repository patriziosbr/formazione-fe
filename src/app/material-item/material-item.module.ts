import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialItemRoutingModule } from './material-item-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MyDatePickerComponent } from './my-date-picker/my-date-picker.component';

import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    ButtonsComponent,
    MyDatePickerComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MaterialItemRoutingModule
  ]
})
export class MaterialItemModule { }
