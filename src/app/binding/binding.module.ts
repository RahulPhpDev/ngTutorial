import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [InterpolationComponent, MainComponent],
  imports: [
    CommonModule
  ]
})
export class BindingModule { }
