import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Articulo } from '@articulo/shared/model/articulo';
import { ArticuloService } from '@articulo/shared/service/articulo.service';
import { InventarioService } from '@inventario/shared/service/inventario.service';
import { Observable } from 'rxjs';
import { Inventario } from '@inventario/shared/model/inventario';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  
  public listarArticulos: Observable<Articulo[]>;
  inventarioForm: FormGroup;

  constructor(protected inventarioService: InventarioService, protected articuloService: ArticuloService) {}

  ngOnInit() {
    this.construirFormularioInventario();
    this.listarArticulos = this.articuloService.consultar(); 
  }
  crear(){
    if(this.inventarioForm.valid){
      const inventario: Inventario ={
        idArticulo : this.inventarioForm.value.idArticulo,
        cantidad : this.inventarioForm.value.cantidadIngreso,
        fechaIngreso : this.inventarioForm.value.fechaIngreso
      };
      this.inventarioService.guardarInventario(inventario).subscribe(()=>window.alert('inventario registrado'));  
      this.limpiarFormulario();
    }
  }

  limpiarFormulario() {
    this.inventarioForm.reset();
  }

  private construirFormularioInventario(){
    
    this.inventarioForm = new FormGroup({
      idArticulo: new FormControl('', [Validators.required]),
      cantidadIngreso: new FormControl('', [Validators.required]),
      fechaIngreso: new FormControl('', [Validators.required]),
    });
  }

  
}
