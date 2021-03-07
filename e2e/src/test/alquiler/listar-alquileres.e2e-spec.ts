import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { ListarAlquileres } from "../../page/alquiler/listar-alquileres.po";

describe("Listar alquileres", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarAlquileres: ListarAlquileres;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarAlquileres = new ListarAlquileres();
  });

  it("Deberia listar alquileres", () => {
    //arrange
    page.navigateTo();
    //act
    navBar.clickBotonNavBarAlquileres();
    browser.sleep(300);
    //assert
    expect(2).toBe(listarAlquileres.contarAlquileres());
    browser.sleep(300);
  });

});
