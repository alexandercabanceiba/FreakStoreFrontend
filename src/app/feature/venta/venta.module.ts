import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { VentaComponent } from './components/venta/venta.component';
import { VentaRoutingModule } from './venta-routing.module';
import { VentaService } from './shared/service/venta.service';

@NgModule({
  declarations: [
    VentaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VentaRoutingModule
  ],
  providers:[VentaService]
})
export class VentaModule { }