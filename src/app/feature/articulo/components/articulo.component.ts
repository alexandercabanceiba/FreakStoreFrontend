import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticuloService } from '@articulo/shared/service/articulo.service';
import { Observable } from 'rxjs';
import { Categoria } from '../../categoria/shared/model/categoria';
import { CategoriaService } from '../../categoria/shared/service/categoria.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articuloForm: FormGroup;
  public listarCategorias: Observable<Categoria[]>;

  constructor(protected categoriaService: CategoriaService, protected articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.listarCategorias = this.categoriaService.consultarCategoriasArticulo(); 
    this.construirFormularioArticulo();
  }

  crear(){
    if(this.articuloForm.valid){
      this.articuloService.guardarArticulo(this.articuloForm.value).subscribe(()=>window.alert('Articulo registrado'));  
      this.limpiarFormulario();
    }
  }

  limpiarFormulario() {
    this.articuloForm.reset();
  }
  
  private construirFormularioArticulo(){
    this.articuloForm = new FormGroup({
      idCategoria: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required])
    });
  }

  

}
