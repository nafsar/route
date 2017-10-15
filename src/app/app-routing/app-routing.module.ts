import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { ActivatedRouteComponent } from '../activatedroute/activatedroute.component';
import { MainComponent } from '../main/main.component';
import { RouterPartsComponent } from '../routerparts/routerparts.component';
import { RouterEventComponent } from '../routerevent/routerevent.component';

const routes: Routes = [
  {
    path: 'routerevent',
    component: RouterEventComponent,
  },
  {
    path: 'routerparts',
    component: RouterPartsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'activatedroute',
    component: ActivatedRouteComponent,
  },
  {
    path: '', pathMatch: 'full',
    component: MainComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
