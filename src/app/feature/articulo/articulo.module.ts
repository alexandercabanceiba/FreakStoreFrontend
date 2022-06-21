import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ArticuloService } from './shared/service/articulo.service';
import { ArticuloComponent } from './components/articulo.component';
import { ArticuloRoutingModule } from './articulo-routing.module';
import { CategoriaService } from '../categoria/shared/service/categoria.service';

@NgModule({
  declarations: [
    ArticuloComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArticuloRoutingModule
  ],
  providers:[ArticuloService, CategoriaService]
})
export class ArticuloModule { }
