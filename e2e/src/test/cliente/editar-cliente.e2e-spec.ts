import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { FormularioCliente } from "../../page/cliente/formulario-cliente.po";
import { ListarClientes } from "../../page/cliente/listar-clientes.po";

describe("Editar Cliente", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let editarCliente: FormularioCliente;
  let listarClientes: ListarClientes;

  const NOMBRE = 'test';
  const CEDULA = '22222';
  const EL_CORREO_O_LA_CEDULA_YA_EXISTE = "El correo o la cédula que intenta asignar, ya existe.";
  const EL_CLIENTE_HA_SIDO_ACTUALIZADO = "El cliente ha sido actualizado";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    editarCliente = new FormularioCliente();
    listarClientes = new ListarClientes();
  });

  it("Deberia editar Cliente", () => {
  //arrange
    page.navigateTo();
    navBar.clickBotonNavBarClientes();
    listarClientes.clickBotonEditarClienteConidEspecifico();
    browser.sleep(500);
    editarCliente.clickInputNombre();
    editarCliente.limpiarInputNombre();
    editarCliente.setInputNombre(NOMBRE);
    browser.sleep(500);

    //act
    editarCliente.clickBotonRegistrarCliente();

    //assert
    const alerta = editarCliente.getTextoSwal();

    expect(alerta).toEqual(EL_CLIENTE_HA_SIDO_ACTUALIZADO);
    browser.sleep(300);
  });

  it("Deberia retornar un error por que ya existe un cliente con la misma cédula", () => {
    //arrange
      page.navigateTo();
      navBar.clickBotonNavBarClientes();
      listarClientes.clickBotonEditarClienteConidEspecifico();
      browser.sleep(500);
      editarCliente.clickInputCedula();
      editarCliente.limpiarInputCedula();
      editarCliente.setInputCedula(CEDULA);
      browser.sleep(500);

      //act
      editarCliente.clickBotonRegistrarCliente();

      //assert
      const alerta = editarCliente.getTextoSwal();

      expect(alerta).toEqual(EL_CORREO_O_LA_CEDULA_YA_EXISTE);
      browser.sleep(300);
    });

});
