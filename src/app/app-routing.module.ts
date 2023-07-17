import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalFeedComponent } from './shared/components/global-feed/global-feed.component';

const routes: Routes = [
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
