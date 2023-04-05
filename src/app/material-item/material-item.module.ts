import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialItemRoutingModule } from './material-item-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';


@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    MaterialItemRoutingModule
  ]
})
export class MaterialItemModule { }
