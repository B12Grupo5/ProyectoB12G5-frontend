import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoModel } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.scss']
})
export class BuscarProductoComponent implements OnInit {

  public productos: ProductoModel[]=[];
  public activo: boolean = false;
  constructor(private productosService: ProductosService, private formBuilder: FormBuilder, private router: Router) { }

  public formgroup: FormGroup =new FormGroup({});
  

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(){
    this.formgroup= this.formBuilder.group({
      id:['',Validators.required]
    });
  }

  /*this.productos=await obtenerProducto();*/

  public async obtenerProducto(): Promise<any> {
    try {
      const response= await this.productosService.obtenerProducto(this.formgroup.value.id)
      console.log(response);
      console.log(response.Id);
      if(response.message=='iD no encontrado'){
        alert(response);
      }else{
        this.productos= response;
        this.activo=true;
      }
      
    } catch (error) {
      this.router.navigate(['/error']);
    }
  }

  public estadoInicialBuscar(){
    this.buildForm();
    this.activo=false;
  }
  
}
