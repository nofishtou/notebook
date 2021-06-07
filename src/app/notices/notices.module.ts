import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticesPageComponent } from './components/notices-page/notices-page.component';
import { NoticesRoutingModule } from './notices-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NoticePageComponent } from './components/notice-page/notice-page.component';


@NgModule({
  declarations: [
    NoticesPageComponent,
    NoticePageComponent
  ],
  imports: [
    CommonModule, NoticesRoutingModule, MatCardModule, MatButtonModule
  ]
})
export class NoticesModule { }
