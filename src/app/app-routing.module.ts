import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./views/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'mobiles',
    loadChildren: () => import('./views/mobiles/mobiles.module').then( m => m.MobilesPageModule)
  },
  {
    path: 'others',
    loadChildren: () => import('./views/others/others.module').then( m => m.OthersPageModule)
  },
  {
    path: 'tablets',
    loadChildren: () => import('./views/tablets/tablets.module').then( m => m.TabletsPageModule)
  },
  {
    path: 'devices',
    loadChildren: () => import('./views/devices/devices.module').then( m => m.DevicesPageModule)
  },  {
    path: 'register',
    loadChildren: () => import('./views/register/register.module').then( m => m.RegisterPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
