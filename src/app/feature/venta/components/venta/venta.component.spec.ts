import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Articulo } from '@articulo/shared/model/articulo';
import { ArticuloService } from '@articulo/shared/service/articulo.service';
import { HttpService } from '@core/services/http.service';

import { VentaComponent } from './venta.component';
import { of } from 'rxjs';
import { VentaService } from '../../shared/service/venta.service';

describe('VentaComponent', () => {
  let component: VentaComponent;
  let fixture: ComponentFixture<VentaComponent>;
  let ventaService: VentaService;
  let articuloService: ArticuloService;
  const listaArticulos: Articulo[] = [
    {
      id: 3,
      idCategoria: 3,
      descripcion: 'PRODUCTO PRUEBA 3',
      precio: 5000
    },
    {
      id: 6,
      idCategoria: 1,
      descripcion: 'PRODUCTO PRUEBA',
      precio: 16009
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [HttpService, VentaService, ArticuloService],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaComponent);
    component = fixture.componentInstance;
    
    ventaService = TestBed.inject(VentaService);
    spyOn(ventaService, 'guardarVenta').and.returnValue(
      of(true)
    );

    articuloService = TestBed.inject(ArticuloService);
    spyOn(articuloService, 'consultarArticulosInventariados').and.returnValue(
      of(listaArticulos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listarArticulos.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.ventaForm.valid).toBeFalsy();
  });

  it('Registrando venta', () => {
    expect(component.ventaForm.valid).toBeFalsy();
    component.ventaForm.controls.idArticulo.setValue(10);
    component.ventaForm.controls.cantidadVenta.setValue(4);
    component.ventaForm.controls.precioVenta.setValue(48990);

    expect(component.ventaForm.valid).toBeTruthy();

    spyOn(window, 'alert').and.callFake(()=>console.log('ejecuto alert'));
    component.crear();

    expect(window.alert).toHaveBeenCalled();

  });
});
