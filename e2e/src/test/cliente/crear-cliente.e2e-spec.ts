import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { FormularioCliente } from "../../page/cliente/formulario-cliente.po";
import { ListarClientes } from "../../page/cliente/listar-clientes.po";

describe("workspace-project Producto", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarClientes: ListarClientes;
  let crearCliente: FormularioCliente;
  const NOMBRE = 'test';
  const CORREO = 'test@gmail.com';
  const TELEFONO = '54321';
  const CEDULA = '12345';
  const DIRECCION = 'calle 13';
  const EL_CLIENTE_HA_SIDO_CREADO = "El cliente ha sido creado.";
  const EL_CLIENTE_YA_EXISTE_EN_EL_SISTEMA = "El cliente ya existe en el sistema";


  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearCliente = new FormularioCliente();
    listarClientes = new ListarClientes();
  });

  it("Deberia crear Cliente", () => {
  //arrange
    page.navigateTo();
    navBar.clickBotonNavBarClientes();
    listarClientes.clickBotonCrearCliente();
    browser.sleep(500);
    crearCliente.clickInputNombre();
    crearCliente.setInputNombre(NOMBRE);
    browser.sleep(500);
    crearCliente.clickInputCorreo();
    crearCliente.setInputCorreo(CORREO);
    browser.sleep(500);
    crearCliente.clickInputTelefono();
    crearCliente.setInputTelefono(TELEFONO);
    browser.sleep(500);
    crearCliente.clickInputCedula();
    crearCliente.setInputCedula(CEDULA);
    browser.sleep(500);
    crearCliente.clickInputDireccion();
    crearCliente.setInputDireccion(DIRECCION);
    browser.sleep(500);

    //act
    crearCliente.clickBotonRegistrarCliente();

    //assert
    const alerta = crearCliente.getTextoSwal();

    expect(alerta).toEqual(EL_CLIENTE_HA_SIDO_CREADO);
    browser.sleep(300);
  });

  it("Deberia retornar un error por que ya existe un cliente con la misma cédula", () => {
    //arrange
      page.navigateTo();
      navBar.clickBotonNavBarClientes();
      listarClientes.clickBotonCrearCliente();
      browser.sleep(500);
      crearCliente.clickInputNombre();
      crearCliente.setInputNombre(NOMBRE);
      browser.sleep(500);
      crearCliente.clickInputCorreo();
      crearCliente.setInputCorreo(CORREO);
      browser.sleep(500);
      crearCliente.clickInputTelefono();
      crearCliente.setInputTelefono(TELEFONO);
      browser.sleep(500);
      crearCliente.clickInputCedula();
      crearCliente.setInputCedula(CEDULA);
      browser.sleep(500);
      crearCliente.clickInputDireccion();
      crearCliente.setInputDireccion(DIRECCION);
      browser.sleep(500);

      //act
      crearCliente.clickBotonRegistrarCliente();

      //assert
      const alerta = crearCliente.getTextoSwal();

      expect(alerta).toEqual(EL_CLIENTE_YA_EXISTE_EN_EL_SISTEMA);
      browser.sleep(300);
    });

});
