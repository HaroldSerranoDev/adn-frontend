import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { ListarClientes } from "../../page/cliente/listar-clientes.po";

describe("workspace-project Producto", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarClientes: ListarClientes;
  const EL_CLIENTE_HA_SIDO_ELIMINADO = "El cliente ha sido eliminado";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarClientes = new ListarClientes();
  });

  it("Deberia eliminar un cliente", () => {
    //arrange
    page.navigateTo();
    //act
    navBar.clickBotonNavBarClientes();
    listarClientes.clickBotonEliminarCliente();
    browser.sleep(500);
    listarClientes.clickSwalConfirmar();
    browser.sleep(500);
    //assert
    const alerta = listarClientes.getTextoSwal();

    expect(alerta).toEqual(EL_CLIENTE_HA_SIDO_ELIMINADO);
    browser.sleep(300);
  });
});
