import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.scss']
})
export class FormularioProductoComponent implements OnInit {

  public formgroup: FormGroup =new FormGroup({});
  constructor(private formBuilder: FormBuilder, private productosService: ProductosService, private router:Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(){
    this.formgroup= this.formBuilder.group({
      nombre_producto:['',Validators.required],
      descripcion:['', Validators.required],
      valor:['',Validators.required],
      categoria:['',Validators.required],
      cantidad_disponible:['',Validators.required],
      usuario_vendedor:['',Validators.required]
    });
  }

  public agregarProducto(){
    this.productosService.agregarProducto(this.formgroup.value).then(() => {
      alert("Producto creado correctamente");
      this.buildForm();
      this.router.navigate(['/productos']);
    }).catch(error => {
      this.router.navigate(['/error'])
    })
  }

}
