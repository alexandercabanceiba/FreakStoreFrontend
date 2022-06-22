import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ArticuloPage } from '../page/articulo/articulo.po';

describe('workspace-project articulo', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let articulo: ArticuloPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        articulo = new ArticuloPage();
    });

    it('Deberia crear articulo', () => {
        const ID_CATEGORIA = 1;
        const DESCRIPCION_ARTICULO = 'Articulo test';
        const PRECIO_ARTICULO = 5999;

        page.navigateTo();
        navBar.clickBotonArticulo();

        articulo.ingresarIdCategoria(ID_CATEGORIA);
        articulo.ingresarDescripcion(DESCRIPCION_ARTICULO);
        articulo.ingresarPrecio(PRECIO_ARTICULO);
    });
});
