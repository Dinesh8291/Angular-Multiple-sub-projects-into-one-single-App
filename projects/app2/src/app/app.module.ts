import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppModule } from '../../../../src/app/app.module';
import { View2Component } from './view2/view2.component'; // Import the AppModule
import { CommonModule } from '@angular/common';
// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
// @NgModule({})
@NgModule({
  declarations: [
    View2Component
  ],
  imports:[
    CommonModule,
    AppRoutingModule
  ]
})
export class App2SharedModule {
  static forRoot(): ModuleWithProviders<App2SharedModule> {
    return {
      ngModule: App2SharedModule,
      providers: [/* Your shared providers here */],
    };
  }
}

