import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  public obtenerProductos(): Promise<any>{
    const url = `${environment.apiUrl}/obtenerProductos`
    return this.http.get(url).toPromise();
  }
  public obtenerProducto(id: number): Promise<any>{
    const url = `${environment.apiUrl}/obtenerProducto/${id}`
    return this.http.get(url).toPromise();
  }
  public agregarProducto(producto:any){
    const url = `${environment.apiUrl}/agregarProducto`
    return this.http.post(url,producto).toPromise();
  }
  public actualizarProducto(producto:any):Promise<any>{
    const url = `${environment.apiUrl}/actualizarProducto/${producto.id}`
    return this.http.put(url,producto).toPromise();
  }
  public eliminarProducto(id: any):Promise<any>{
    const url = `${environment.apiUrl}/eliminarProducto/${id}`
    return this.http.delete(url).toPromise();
  }
}
