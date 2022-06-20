import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulo } from '../model/articulo';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ArticuloService {
  
  httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  options = {
    headers: this.httpHeaders
  };

  constructor(public http: HttpService) {}

  public consultar() {
    return this.http.doGet(`${environment.endpoint}articulo/obtener-articulos`, this.options)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .pipe(map((response: any) => response as Articulo[]));
  }
}
