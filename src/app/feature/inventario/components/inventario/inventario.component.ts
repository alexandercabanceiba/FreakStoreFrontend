import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Articulo } from '@articulo/shared/model/articulo';
import { ArticuloService } from '@articulo/shared/service/articulo.service';
import { InventarioService } from '@inventario/shared/service/inventario.service';
import { Observable } from 'rxjs';

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
    
    this.listarArticulos = this.articuloService.consultar(); 
    this.construirFormularioInventario();
  }

  private construirFormularioInventario(){
    
    this.inventarioForm = new FormGroup({
      idTipo: new FormControl('', [Validators.required]),
      idArticulo: new FormControl('', [Validators.required]),
      cantidadIngreso: new FormControl(''),
      cantidadVenta: new FormControl(''),
      fechaIngreso: new FormControl(''),
      precioVenta: new FormControl(''),
    });

  }

  crear(){}

}
