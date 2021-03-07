import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { ListarDevoluciones } from "../../page/devolucion/listar-devoluciones.po";

describe("Listar devoluciones", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarDevoluciones: ListarDevoluciones;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarDevoluciones = new ListarDevoluciones();
  });

  it("Deberia listar devoluciones", () => {
    //arrange
    page.navigateTo();
    //act
    navBar.clickBotonNavBarDevoluciones();
    browser.sleep(300);
    //assert
    expect(listarDevoluciones.contarDevoluciones()).toBeGreaterThanOrEqual(0);
    browser.sleep(300);
  });

});
