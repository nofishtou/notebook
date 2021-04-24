import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticesPageComponent } from './components/notices-page/notices-page.component';
import { NoticesRoutingModule } from './notices-routing.module';



@NgModule({
  declarations: [
    NoticesPageComponent
  ],
  imports: [
    CommonModule, NoticesRoutingModule
  ]
})
export class NoticesModule { }
