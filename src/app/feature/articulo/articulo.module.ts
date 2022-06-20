import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ArticuloService } from './shared/service/articulo.service';
import { ArticuloComponent } from './components/articulo.component';


@NgModule({
  declarations: [
    ArticuloComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[ArticuloService]
})
export class ArticuloModule { }
