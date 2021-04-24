import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./main-page/main-page.module').then((m) => m.MainPageModule), },
  {
    path: 'create-notice',
    loadChildren: () => import('./create-notice/create-notice.module').then((m) => m.CreateNoticeModule),
  },
  { path: 'notices', loadChildren: () => import('./notices/notices.module').then((m) => m.NoticesModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  // { path: 'profile/:id', loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule) },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
