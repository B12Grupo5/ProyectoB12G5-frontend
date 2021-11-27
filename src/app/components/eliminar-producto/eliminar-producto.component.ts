import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.scss']
})
export class EliminarProductoComponent implements OnInit {

  public formgroup: FormGroup =new FormGroup({});
  constructor(private productosService: ProductosService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(){
    this.formgroup= this.formBuilder.group({
      id:['',Validators.required]
    });
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
