import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { ListarMotos } from "../../page/moto/listar-motos.po";

describe("Listar motos", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarMotos: ListarMotos;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarMotos = new ListarMotos();
  });

  it("Deberia listar motos", () => {
    //arrange
    page.navigateTo();
    //act
    navBar.clickBotonNavBarMotos();
    browser.sleep(300);
    //assert
    expect(2).toBe(listarMotos.contarMotos());
    browser.sleep(300);
  });

});
