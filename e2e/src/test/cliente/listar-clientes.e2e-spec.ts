import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { ListarClientes } from "../../page/cliente/listar-clientes.po";

describe("workspace-project Producto", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarClientes: ListarClientes;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarClientes = new ListarClientes();
  });

  it("Deberia listar clientes", () => {
    //arrange
    page.navigateTo();
    //act
    navBar.clickBotonNavBarClientes();
    browser.sleep(300);
    //assert
    expect(3).toBe(listarClientes.contarClientes());
    browser.sleep(300);
  });

});
