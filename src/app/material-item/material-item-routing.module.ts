import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { MyDatePickerComponent } from './my-date-picker/my-date-picker.component';
import { MyModalComponent } from './my-modal/my-modal.component';

const routes: Routes = [
  {path:"buttons", component: ButtonsComponent},
  {path:"date", component: MyDatePickerComponent},
  {path:"modal", component: MyModalComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialItemRoutingModule { }
