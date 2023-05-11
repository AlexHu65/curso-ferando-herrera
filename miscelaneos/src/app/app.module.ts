import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './Components/ng-style/ng-style.component';
import { CssComponent } from './Components/css/css.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
