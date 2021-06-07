import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticePageComponent } from './components/notice-page/notice-page.component';
import { NoticesPageComponent } from './components/notices-page/notices-page.component';

const routes: Routes = [
  { path: '', component: NoticesPageComponent },
  { path: 'notice/:id', component: NoticePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticesRoutingModule {}
