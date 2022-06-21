import { Injectable } from '@angular/core';
import { Inventario } from '@inventario/shared/model/inventario';
import { Venta } from '@inventario/shared/model/venta';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(public http: HttpService) { }

  public guardarInventario(inventario: Inventario) {
    return this.http.doPost<Inventario, boolean>(`${environment.endpoint}/inventario`, inventario);
  }

  public guardarVenta(venta: Venta) {
    return this.http.doPost<Venta, boolean>(`${environment.endpoint}/venta`, venta);
  }
}
