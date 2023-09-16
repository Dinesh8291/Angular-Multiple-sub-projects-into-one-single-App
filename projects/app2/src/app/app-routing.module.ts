import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View2Component } from './view2/view2.component';

const routes: Routes = [
  {
    path:'view2',
    component:View2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class AppRoutingModule { }
