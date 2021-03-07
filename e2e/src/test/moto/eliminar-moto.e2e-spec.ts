import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { ListarMotos } from "../../page/moto/listar-motos.po";

describe("Eliminar Moto", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarMotos: ListarMotos;
  const LA_MOTO_HA_SIDO_ELIMINADA = "La moto ha sido eliminada";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarMotos = new ListarMotos();
  });

  it("Deberia eliminar un moto", () => {
    //arrange
    page.navigateTo();
    //act
    navBar.clickBotonNavBarMotos();
    listarMotos.clickBotonEliminarMoto();
    browser.sleep(500);
    listarMotos.clickSwalConfirmar();
    browser.sleep(500);
    //assert
    const alerta = listarMotos.getTextoSwal();

    expect(alerta).toEqual(LA_MOTO_HA_SIDO_ELIMINADA);
    browser.sleep(300);
  });
});
