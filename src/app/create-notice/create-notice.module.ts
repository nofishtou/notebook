import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNoticePageComponent } from './components/create-notice-page/create-notice-page.component';
import { CreateNoticeRoutingModule } from './create-notice-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    CreateNoticePageComponent
  ],
  imports: [
    CommonModule,
    CreateNoticeRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CreateNoticeModule { }
