import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders} from './app.routing';/// importando el routing

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FechaComponent } from './fecha/fecha.component';
import { FormularioComponent } from './formulario/formulario.component';

//importando el http
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    FechaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
