import { by, element } from 'protractor';

export class NavbarPage {
    
    linkArticulo = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));

    async clickBotonArticulo() {
        await this.linkArticulo.click();
    }
}
