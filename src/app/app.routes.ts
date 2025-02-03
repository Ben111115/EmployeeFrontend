import { Routes, withComponentInputBinding, provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

import { UsercardComponent } from './usercard/usercard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: UsercardComponent, pathMatch: 'full' },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  //  { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] }
];

export const appRouterProviders = [
  provideRouter(routes, withComponentInputBinding())
];