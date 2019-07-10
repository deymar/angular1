import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Importar componentes
import {EmpleadoComponent} from './empleado/empleado.component';
import {FrutaComponent}    from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FechaComponent } from './fecha/fecha.component';
import { FormularioComponent } from './formulario/formulario.component';
const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'empleado', component: EmpleadoComponent },
    {path: 'fruta', component: FrutaComponent },
  
    {path: 'home', component: HomeComponent },
    {path: 'contacto', component: ContactoComponent },

    ///RUTA CON UN PARAMETRO
    {path: 'contacto/:page', component: ContactoComponent },
    ////RUTA PARA EL COMPONENTE DE FECHA
    {path: 'fecha', component: FechaComponent },
    {path: 'formulario', component: FormularioComponent }

];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
