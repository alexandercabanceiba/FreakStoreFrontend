import { Injectable } from '@angular/core';
import { Venta } from 'src/app/feature/venta/shared/model/venta';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(public http: HttpService) { }

  public guardarVenta(venta: Venta) {
    return this.http.doPost<Venta, boolean>(`${environment.endpoint}/venta`, venta);
  }
}
