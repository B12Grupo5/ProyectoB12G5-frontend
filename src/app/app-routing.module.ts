import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';

const routes: Routes = [
  {path: 'productos',component: TablaProductosComponent},
  {path: '**',redirectTo: 'productos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
