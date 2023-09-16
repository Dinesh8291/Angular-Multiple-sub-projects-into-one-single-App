import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponentComponent } from './view-component/view-component.component';

const routes: Routes = [
  {
    path:'main-app',
    component:ViewComponentComponent
  },
  {
    path:'app1',
    loadChildren: () => import('projects/app1/src/app/app.module').then(mod => mod.App1SharedModule)
  },
  {
    path:'app2',
    loadChildren: () => import('projects/app2/src/app/app.module').then(mod => mod.App2SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
