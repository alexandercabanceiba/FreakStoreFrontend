import { by, element } from 'protractor';

export class ArticuloPage {
    private inputIdCategoria =  element.all(by.id('idCategoria'));
    private inputDescripcionArticulo = element.all(by.id('descripcion'));
    private inputPrecioArticulo = element.all(by.id('precio'));

    async ingresarIdCategoria(idCategoria) {
        await this.inputIdCategoria.sendKeys(idCategoria);
    }

    async ingresarDescripcion(descripcion) {
        await this.inputDescripcionArticulo.sendKeys(descripcion);
    }

    async ingresarPrecio(precio) {
        await this.inputPrecioArticulo.sendKeys(precio);
    }

}
