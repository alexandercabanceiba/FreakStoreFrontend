import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { InventarioComponent } from './components/inventario/inventario.component';
import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioService } from './shared/service/inventario.service';

@NgModule({
  declarations: [
    InventarioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InventarioRoutingModule,
  ],
  providers:[InventarioService]
})
export class InventarioModule { }
