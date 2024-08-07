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
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClassComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
