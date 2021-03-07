import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { ListarAlquileres } from "../../page/alquiler/listar-alquileres.po";

describe("Eliminar Alquiler", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarAlquileres: ListarAlquileres;
  const EL_ALQUILER_HA_SIDO_ELIMINADO = "El alquiler ha sido eliminado";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarAlquileres = new ListarAlquileres();
  });

  it("Deberia eliminar un alquiler", () => {
    //arrange
    page.navigateTo();
    //act
    navBar.clickBotonNavBarAlquileres();
    listarAlquileres.clickBotonEliminarAlquiler();
    browser.sleep(500);
    listarAlquileres.clickSwalConfirmar();
    browser.sleep(500);
    //assert
    const alerta = listarAlquileres.getTextoSwal();

    expect(alerta).toEqual(EL_ALQUILER_HA_SIDO_ELIMINADO);
    browser.sleep(300);
  });
});
