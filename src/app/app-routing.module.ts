import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/inventario', pathMatch: 'full' },
  { path: 'articulo', loadChildren: () => import('@articulo/articulo.module').then(mod => mod.ArticuloModule) },
  { path: 'inventario', loadChildren: () => import('@inventario/inventario.module').then(mod => mod.InventarioModule) },
  { path: 'venta', loadChildren: () => import('./feature/venta/venta.module').then(mod => mod.VentaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
