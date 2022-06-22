import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentaComponent } from './components/venta/venta.component';


const routes: Routes = [
  {
    path: '',
    component: VentaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
