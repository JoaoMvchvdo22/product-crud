import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { CreateRoutingModule } from './create.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CreateRoutingModule,
    FormsModule
  ],
  declarations: [CreateComponent]
})
export class CreateModule { }
