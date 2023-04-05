import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialItemRoutingModule } from './material-item-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MyDatePickerComponent } from './my-date-picker/my-date-picker.component';

import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
//date
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
//modal
import { MyModalComponent } from './my-modal/my-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ButtonsComponent,
    MyDatePickerComponent,
    MyModalComponent
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
    MatDialogModule,
    FormsModule,
    MaterialItemRoutingModule
  ]
})
export class MaterialItemModule { }
