import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InventarioService } from './inventario.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpResponse } from '@angular/common/http';

describe('SharedService', () => {
  let service: InventarioService;
  let httpMock: HttpTestingController;
  const apiEndpointInventario = `${environment.endpoint}/inventario`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InventarioService, HttpService]
    });

    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(InventarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia crear el inventario', () => {
    const dummyInventario = { idArticulo : 1, cantidad: 2, fechaIngreso : '2022-06-13'};
    service.guardarInventario(dummyInventario).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointInventario);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

});
