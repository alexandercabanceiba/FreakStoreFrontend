import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../model/categoria';

@Injectable()
export class CategoriaService {
  
  constructor(public http: HttpService) {}

  public consultarCategoriasArticulo() {
    return this.http.doGet(`${environment.endpoint}categoria/obtener-todas-categorias`)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .pipe(map((response: any) => response as Categoria[]));
  }
}
