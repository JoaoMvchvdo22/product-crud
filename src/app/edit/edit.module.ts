import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { EditRoutingModule } from './edit.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EditRoutingModule,
    FormsModule
  ],
  declarations: [EditComponent]
})
export class EditModule { }
