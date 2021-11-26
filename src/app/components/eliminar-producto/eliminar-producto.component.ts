import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
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


  public eliminarProducto(){
    /*this.productosService.eliminarProducto(this.formgroup.value).then(() => {
      console.log();
      /*if(response.message==='Deleted'){
        alert('Eliminado correctamente');
      }*/
    /*})catch(error => {
      this.router.navigate(['/error'])
    })*/
  }
  
}
