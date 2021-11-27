import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.scss']
})
export class ActualizarProductoComponent implements OnInit {

  public formgroup: FormGroup =new FormGroup({});
  constructor(private formBuilder: FormBuilder, private productosService: ProductosService, private router:Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(){
    this.formgroup= this.formBuilder.group({
      id:['',Validators.required],
      nombre_producto:['',Validators.required],
      descripcion:['',Validators.required],
      valor:['',Validators.required],
      categoria:['',Validators.required],
      cantidad_disponible:['',Validators.required],
      usuario_vendedor:['',Validators.required]
    });
  }

  public async actualizarProducto(){
    try {
      const response= await this.productosService.actualizarProducto(this.formgroup.value);
      console.log(this.formgroup.value);
      console.log(response.message);
      if(response.message==='updated'){
        alert('Actualizado correctamente');
      }else{
        alert(response.message);
      }
      this.router.navigate(['/productos']);
      console.log(Response);
    } catch (error) {
      this.router.navigate(['/error']);
    }
    
  }

  public async eliminarProducto(){
    try {
      const response= await this.productosService.eliminarProducto(this.formgroup.value.id)
      console.log(response.message);
      if(response.message==='Deleted'){
        alert('Eliminado correctamente');
      }else{
        alert(response.message);
      }
      this.router.navigate(['/productos']);
      console.log(Response);
    } catch (error) {
      this.router.navigate(['/error']);
    }
  }

}
