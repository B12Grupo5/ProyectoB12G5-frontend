import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderiniComponent } from './components/headerini/headerini.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './services/productos/productos.service';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaProductosComponent,
    NotFoundComponent,
    HeaderiniComponent,
    UsuariosComponent,
    ProductosComponent,
    EliminarProductoComponent,
    ErrorComponent,
    FormularioProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProductosService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
