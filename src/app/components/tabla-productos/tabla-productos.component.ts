import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoModel } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss']
})
export class TablaProductosComponent implements OnInit {

  public productos: ProductoModel[]=[];
  constructor(private productosService: ProductosService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.productos=await this.obtenerProductos();
    console.log(this.productos);
  }

  public async obtenerProductos(): Promise<any> {
    try {
      const response = await this.productosService.obtenerProductos();
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      this.router.navigate(['/error']);
    }
  }
}
