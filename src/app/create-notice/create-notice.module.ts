import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNoticePageComponent } from './components/create-notice-page/create-notice-page.component';
import { CreateNoticeRoutingModule } from './create-notice-routing.module';



@NgModule({
  declarations: [
    CreateNoticePageComponent
  ],
  imports: [
    CommonModule, CreateNoticeRoutingModule
  ]
})
export class CreateNoticeModule { }
