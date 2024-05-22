import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './Components/ng-style/ng-style.component';
import { CssComponent } from './Components/css/css.component';
import { ClassComponent } from './Components/class/class.component';
import { ResaltadoDirective } from './Directives/resaltado.directive';
import { NgSwitchComponent } from './Components/ng-switch/ng-switch.component';
import { HomeComponent } from './Components/home/home.component';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClassComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
