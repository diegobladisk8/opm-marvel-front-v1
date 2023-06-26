import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppMarvelComponent } from './app-marvel/app-marvel.component';
import { AppAuditComponent } from './app-audit/app-audit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'audit', component: AppAuditComponent },
  {path: 'marvel', component: AppMarvelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
