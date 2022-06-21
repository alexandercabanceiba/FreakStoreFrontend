import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Articulo } from '@articulo/shared/model/articulo';
import { ArticuloService } from '@articulo/shared/service/articulo.service';
import { InventarioService } from '@inventario/shared/service/inventario.service';
import { Observable } from 'rxjs';
import { Inventario } from '@inventario/shared/model/inventario';
import { Venta } from '@inventario/shared/model/venta';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  
  public listarArticulos: Observable<Articulo[]>;
  inventarioForm: FormGroup;
  tipoIngreso = 1;
  tipoVenta = 2;

  constructor(protected inventarioService: InventarioService, protected articuloService: ArticuloService) {}

  ngOnInit() {
    this.construirFormularioInventario();
  }

  private construirFormularioInventario(){
    
    this.inventarioForm = new FormGroup({
      idTipo: new FormControl('', [Validators.required]),
      idArticulo: new FormControl('', [Validators.required]),
      cantidadIngreso: new FormControl(''),
      fechaIngreso: new FormControl(''),
      cantidadVenta: new FormControl(''),
      precioVenta: new FormControl('')
    });
  }

  onChange(value) {
    if(value == this.tipoIngreso){
      this.listarArticulos = this.articuloService.consultar(); 
      this.inventarioForm.controls['cantidadVenta'].disable();
      this.inventarioForm.controls['precioVenta'].disable();
      this.inventarioForm.controls['cantidadIngreso'].enable();
      this.inventarioForm.controls['fechaIngreso'].enable();

      this.inventarioForm = new FormGroup({
        idTipo: new FormControl(this.inventarioForm.value.idTipo),
        idArticulo: new FormControl('', [Validators.required]),
        cantidadIngreso: new FormControl('', [Validators.required]),
        fechaIngreso: new FormControl('', [Validators.required]),
        cantidadVenta: new FormControl(''),
        precioVenta: new FormControl('')
      });
    }else{
      this.listarArticulos = this.articuloService.consultarArticulosInventariados(); 
      this.inventarioForm.controls['cantidadVenta'].enable();
      this.inventarioForm.controls['precioVenta'].enable();
      this.inventarioForm.controls['cantidadIngreso'].disable();
      this.inventarioForm.controls['fechaIngreso'].disable();

      this.inventarioForm = new FormGroup({
        idTipo: new FormControl(this.inventarioForm.value.idTipo),
        idArticulo: new FormControl('', [Validators.required]),
        cantidadVenta: new FormControl('', [Validators.required]),
        precioVenta: new FormControl('', [Validators.required]),
        cantidadIngreso: new FormControl(''),
        fechaIngreso: new FormControl('')
      });
    }
  }

  crear(){
    if(this.inventarioForm.valid){
      if(this.inventarioForm.value.idTipo == this.tipoIngreso){

        let inventario: Inventario ={
          idArticulo : this.inventarioForm.value.idArticulo,
          cantidad : this.inventarioForm.value.cantidadIngreso,
          fechaIngreso : this.inventarioForm.value.fechaIngreso
        }
        this.inventarioService.guardarInventario(inventario).subscribe(()=>window.alert('inventario registrado'));  
        this.clear();
      }else if(this.inventarioForm.value.idTipo == this.tipoVenta){

        let venta: Venta = {
          idArticulo: this.inventarioForm.value.idArticulo,
          precioVenta: this.inventarioForm.value.precioVenta,
          cantidadVenta: this.inventarioForm.value.cantidadVenta
        }
        this.inventarioService.guardarVenta(venta).subscribe(()=>window.alert('venta registrada'));
        this.clear();
      }
    }
  }


  clear() {
    this.inventarioForm.reset();
  }
}
