import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Articulo } from '@articulo/shared/model/articulo';
import { ArticuloService } from '@articulo/shared/service/articulo.service';
import { Observable } from 'rxjs';
import { Venta } from '../../shared/model/venta';
import { VentaService } from '../../shared/service/venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  public listarArticulos: Observable<Articulo[]>;
  ventaForm: FormGroup;

  constructor(protected ventaService: VentaService, protected articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.construirFormularioVenta();
    this.listarArticulos = this.articuloService.consultarArticulosInventariados(); 
  }

  crear(){
    if(this.ventaForm.valid){
      const venta: Venta = {
        idArticulo: this.ventaForm.value.idArticulo,
        precioVenta: this.ventaForm.value.precioVenta,
        cantidadVenta: this.ventaForm.value.cantidadVenta
      };
      this.ventaService.guardarVenta(venta).subscribe({
        next() {
          window.alert('Venta registrada');
        },
        error() {
          window.alert('Error en el registro de venta. Por favor revisar que la cantidad no supere la disponibilidad, ni el precio se diferente');
        }
      });

    }
  }

  limpiarFormulario() {
    this.ventaForm.reset();
  }

  private construirFormularioVenta(){
    this.ventaForm = new FormGroup({
      idArticulo: new FormControl('', [Validators.required]),
      cantidadVenta: new FormControl('', [Validators.required]),
      precioVenta: new FormControl('', [Validators.required])
    });
  }

}
