import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoticePageComponent } from './components/create-notice-page/create-notice-page.component';


const routes: Routes = [
  { path: '', component: CreateNoticePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateNoticeRoutingModule {}
