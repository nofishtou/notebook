import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticesPageComponent } from './components/notices-page/notices-page.component';

const routes: Routes = [
  { path: '', component: NoticesPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticesRoutingModule {}
