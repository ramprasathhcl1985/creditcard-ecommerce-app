import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'user', loadChildren: () => import('./common-module/users/user/user.module').then(m => m.UserModule) },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'ecommerce', loadChildren: () => import('./feature-module/feature.module').then(m => m.FeatureModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
