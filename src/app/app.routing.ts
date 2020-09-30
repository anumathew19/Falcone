import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', loadChildren: './home-page/home-page.module#HomePageModule' },
  { path: 'result', loadChildren: './result-page/result-page.module#ResultPageModule'}
];
export const routing: ModuleWithProviders
= RouterModule.forRoot(routes);