import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  public obtenerProductos(){}
  public obtenerProducto(id: number){}
  public agregarProducto(producto:any){}
  public actualizarProducto(producto:any){}
  public eliminarProducto(id: number){}
}
