import { Routes, withComponentInputBinding, provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

import { UsercardComponent } from './usercard/usercard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: UsercardComponent, pathMatch: 'full' },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
];

export const appRouterProviders = [
  provideRouter(routes, withComponentInputBinding())
];