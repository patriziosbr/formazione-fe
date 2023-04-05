import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialItemRoutingModule } from './material-item-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';

import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MaterialItemRoutingModule
  ]
})
export class MaterialItemModule { }
