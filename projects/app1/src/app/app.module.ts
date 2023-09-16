import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AppModule } from '../../../../src/app/app.module';
import { View1Component } from './view1/view1.component'; // Import the AppModule
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

@NgModule({
  declarations: [
    View1Component,AppComponent
  ],exports:[
    View1Component
  ],
  imports:[
    // BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  // bootstrap: [AppComponent]
})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders<App1SharedModule> {
    return {
      ngModule: App1SharedModule,
      providers: [/* Your shared providers here */],
    };
  }
}
