import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulo } from '../model/articulo';

@Injectable()
export class ArticuloService {
  
  constructor(public http: HttpService) {}

  public consultar() {
    return this.http.doGet(`${environment.endpoint}/articulo/obtener-articulos-sin-inventario`)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .pipe(map((response: any) => response as Articulo[]));
  }

  public consultarArticulosInventariados() {
    return this.http.doGet(`${environment.endpoint}/articulo/obtener-articulos-inventariados`)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .pipe(map((response: any) => response as Articulo[]));
  }

  public guardarArticulo(articulo: Articulo) {
    return this.http.doPost<Articulo, boolean>(`${environment.endpoint}/articulo`, articulo);
  }
}
