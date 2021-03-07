import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { FormularioAlquiler } from "../../page/alquiler/formulario-alquiler.po";
import { ListarAlquileres } from "../../page/alquiler/listar-alquileres.po";

describe("Crear alquiler", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarAlquileres: ListarAlquileres;
  let crearAlquiler: FormularioAlquiler;
  const CLASE_CLIENTES = "clientes";
  const CLASE_MOTOS = "motos";
  const EL_ALQUILER_HA_SIDO_CREADO = "El alquiler ha sido creado.";
  const LA_MOTO_QUE_INTENTA_ALQUILAR_SE_ENCUENTRA_OCUPADA = "La moto que intenta alquilar se encuentra ocupada.";
  const LIMITE_DE_DIAS_ALQUILER_SUPERADO = "Limite de dias de alquiler superado, máximo permitido (5 días).";
  const DEBE_SOLICITAR_SU_ALQUILER_CON_MINIMO_DOS_DIAS_DE_ANTICIPACION = "Debe solicitar su alquiler con mínimo dos días de anticipación.";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearAlquiler = new FormularioAlquiler();
    listarAlquileres = new ListarAlquileres();
  });

  it("Deberia crear Alquiler", () => {
    //arrange
    const FECHA_ALQUILER = "10/01/2021";
    const FECHA_ENTREGA = "10/04/2021";
    page.navigateTo();
    navBar.clickBotonNavBarAlquileres();
    listarAlquileres.clickBotonCrearAlquiler();
    browser.sleep(500);
    crearAlquiler.clickInputFechaAlquiler();
    crearAlquiler.setInputFechaAlquiler(FECHA_ALQUILER);
    browser.sleep(500);
    crearAlquiler.clickInputFechaEntrega();
    crearAlquiler.setInputFechaEntrega(FECHA_ENTREGA);
    browser.sleep(500);
    crearAlquiler.clickInputIdCliente();
    crearAlquiler.clickOpcionIdCliente(CLASE_CLIENTES);
    browser.sleep(500);
    crearAlquiler.clickInputIdMoto();
    crearAlquiler.clickOpcionIdMoto(CLASE_MOTOS,1);
    browser.sleep(500);
    //act
    crearAlquiler.clickBotonRegistrarAlquiler();
    browser.sleep(500);
    //assert
    const alerta = crearAlquiler.getTextoSwal();

    expect(alerta).toEqual(EL_ALQUILER_HA_SIDO_CREADO);
    browser.sleep(300);
  });

  it("Deberia retornar un error por que ya existe un alquiler para esa moto en la misma fecha", () => {
    //arrange
    const FECHA_ALQUILER = "10/01/2021";
    const FECHA_ENTREGA = "10/04/2021";
    page.navigateTo();
    navBar.clickBotonNavBarAlquileres();
    listarAlquileres.clickBotonCrearAlquiler();
    browser.sleep(500);
    crearAlquiler.clickInputFechaAlquiler();
    crearAlquiler.setInputFechaAlquiler(FECHA_ALQUILER);
    browser.sleep(500);
    crearAlquiler.clickInputFechaEntrega();
    crearAlquiler.setInputFechaEntrega(FECHA_ENTREGA);
    browser.sleep(200);
    crearAlquiler.clickInputIdCliente();
    crearAlquiler.clickOpcionIdCliente(CLASE_CLIENTES);
    browser.sleep(500);
    crearAlquiler.clickInputIdMoto();
    crearAlquiler.clickOpcionIdMoto(CLASE_MOTOS,1);
    browser.sleep(500);
    //act
    crearAlquiler.clickBotonRegistrarAlquiler();

    //assert
    const alerta = crearAlquiler.getTextoSwal();

    expect(alerta).toEqual(LA_MOTO_QUE_INTENTA_ALQUILAR_SE_ENCUENTRA_OCUPADA);
    browser.sleep(300);
  });

  it("Deberia retornar un error por que está solicitando la reserva con menos de 2 días de anticipación", () => {
    //arrange
    const fechaActual = new Date();
    const fechaEntrega = new Date();

    const FECHA_ALQUILER = (fechaActual.getMonth()+1)+"/"+fechaActual.getDate()+"/"+fechaActual.getFullYear();

    fechaEntrega.setDate(fechaEntrega.getDate() + 2);

    const FECHA_ENTREGA =(fechaEntrega.getMonth()+1)+"/"+fechaEntrega.getDate()+"/"+fechaEntrega.getFullYear();



    page.navigateTo();
    navBar.clickBotonNavBarAlquileres();
    listarAlquileres.clickBotonCrearAlquiler();
    browser.sleep(500);
    crearAlquiler.clickInputFechaAlquiler();
    crearAlquiler.setInputFechaAlquiler(FECHA_ALQUILER);
    browser.sleep(500);
    crearAlquiler.clickInputFechaEntrega();
    crearAlquiler.setInputFechaEntrega(FECHA_ENTREGA);
    browser.sleep(200);
    crearAlquiler.clickInputIdCliente();
    crearAlquiler.clickOpcionIdCliente(CLASE_CLIENTES);
    browser.sleep(500);
    crearAlquiler.clickInputIdMoto();
    crearAlquiler.clickOpcionIdMoto(CLASE_MOTOS,1);
    browser.sleep(500);
    //act
    crearAlquiler.clickBotonRegistrarAlquiler();

    //assert
    const alerta = crearAlquiler.getTextoSwal();

    expect(alerta).toEqual(DEBE_SOLICITAR_SU_ALQUILER_CON_MINIMO_DOS_DIAS_DE_ANTICIPACION);
    browser.sleep(300);
  });

  it("Deberia retornar un error por supera el limite de días (5) de alquiler", () => {
    //arrange
    const FECHA_ALQUILER = "09/01/2021";
    const FECHA_ENTREGA = "09/10/2021";

    page.navigateTo();
    navBar.clickBotonNavBarAlquileres();
    listarAlquileres.clickBotonCrearAlquiler();
    browser.sleep(500);
    crearAlquiler.clickInputFechaAlquiler();
    crearAlquiler.setInputFechaAlquiler(FECHA_ALQUILER);
    browser.sleep(500);
    crearAlquiler.clickInputFechaEntrega();
    crearAlquiler.setInputFechaEntrega(FECHA_ENTREGA);
    browser.sleep(200);
    crearAlquiler.clickInputIdCliente();
    crearAlquiler.clickOpcionIdCliente(CLASE_CLIENTES);
    browser.sleep(500);
    crearAlquiler.clickInputIdMoto();
    crearAlquiler.clickOpcionIdMoto(CLASE_MOTOS,1);
    browser.sleep(500);
    //act
    crearAlquiler.clickBotonRegistrarAlquiler();

    //assert
    const alerta = crearAlquiler.getTextoSwal();

    expect(alerta).toEqual(LIMITE_DE_DIAS_ALQUILER_SUPERADO);
    browser.sleep(300);
  });
});
