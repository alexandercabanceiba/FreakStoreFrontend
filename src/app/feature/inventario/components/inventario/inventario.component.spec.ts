import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { InventarioService } from '@inventario/shared/service/inventario.service';
import { of } from 'rxjs';
import { ArticuloService } from '@articulo/shared/service/articulo.service';

import { InventarioComponent } from './inventario.component';
import { Articulo } from '@articulo/shared/model/articulo';

describe('InventarioComponent', () => {
  let component: InventarioComponent;
  let fixture: ComponentFixture<InventarioComponent>;
  let inventarioService: InventarioService;
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
      declarations: [ InventarioComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [HttpService, InventarioService, ArticuloService],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioComponent);
    component = fixture.componentInstance;
    inventarioService =  TestBed.inject(InventarioService);
    spyOn(inventarioService, 'guardarInventario').and.returnValue(
      of(true)
    );

    articuloService = TestBed.inject(ArticuloService);
    spyOn(articuloService, 'consultar').and.returnValue(
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
    expect(component.inventarioForm.valid).toBeFalsy();
  });

  it('Registrando inventario', () => {
    expect(component.inventarioForm.valid).toBeFalsy();
    
    component.inventarioForm.controls.idArticulo.setValue(2);
    component.inventarioForm.controls.cantidadIngreso.setValue(4);
    component.inventarioForm.controls.fechaIngreso.setValue('2022-06-19');

    expect(component.inventarioForm.valid).toBeTruthy();

    spyOn(window, 'alert').and.callFake(()=>console.log('ejecuto alert'));
    component.crear();

    expect(window.alert).toHaveBeenCalled();

  });
});