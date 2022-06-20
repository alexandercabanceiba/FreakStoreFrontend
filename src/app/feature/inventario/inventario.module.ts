import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { InventarioComponent } from './components/inventario/inventario.component';
import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioService } from './shared/service/inventario.service';

@NgModule({
  declarations: [
    InventarioComponent
  ],
  imports: [
    SharedModule,
    InventarioRoutingModule,
  ],
  providers:[InventarioService]
})
export class InventarioModule { }
