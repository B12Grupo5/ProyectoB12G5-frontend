import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';

const routes: Routes = [
  {path: 'productos',component: ProductosComponent},
  {path: 'eliminar',component: EliminarProductoComponent},
  {path: 'formulario-producto',component: FormularioProductoComponent},
  {path: 'error' ,component: ErrorComponent},
  {path: ' ' ,redirectTo:'productos'},
  {path: '**',component: NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
