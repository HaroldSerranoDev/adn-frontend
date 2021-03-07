import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { FormularioAlquiler } from "../../page/alquiler/formulario-alquiler.po";
import { ListarAlquileres } from "../../page/alquiler/listar-alquileres.po";

describe("Editar alquiler", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarAlquileres: ListarAlquileres;
  let editarAlquiler: FormularioAlquiler;
  const CLASE_CLIENTES = "clientes";
  const CLASE_MOTOS = "motos";
  const EL_ALQUILER_HA_SIDO_ACTUALIZADO = "El alquiler ha sido actualizado";
  const LA_MOTO_QUE_INTENTA_ALQUILAR_SE_ENCUENTRA_OCUPADA = "La moto que intenta alquilar se encuentra ocupada.";
  const LIMITE_DE_DIAS_ALQUILER_SUPERADO = "Limite de dias de alquiler superado, máximo permitido (5 días).";
  const DEBE_SOLICITAR_SU_ALQUILER_CON_MINIMO_DOS_DIAS_DE_ANTICIPACION = "Debe solicitar su alquiler con mínimo dos días de anticipación.";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    editarAlquiler = new FormularioAlquiler();
    listarAlquileres = new ListarAlquileres();
  });

  it("Deberia editar Alquiler", () => {
    //arrange
    const FECHA_ALQUILER = "12/01/2021";
    const FECHA_ENTREGA = "12/04/2021";
    page.navigateTo();
    navBar.clickBotonNavBarAlquileres();
    listarAlquileres.clickBotonEditarAlquilerConidEspecifico();
    browser.sleep(500);
    editarAlquiler.clickInputFechaAlquiler();
    editarAlquiler.setInputFechaAlquiler(FECHA_ALQUILER);
    browser.sleep(500);
    editarAlquiler.clickInputFechaEntrega();
    editarAlquiler.setInputFechaEntrega(FECHA_ENTREGA);

    //act
    editarAlquiler.clickBotonRegistrarAlquiler();

    //assert
    const alerta = editarAlquiler.getTextoSwal();

    expect(alerta).toEqual(EL_ALQUILER_HA_SIDO_ACTUALIZADO);
    browser.sleep(300);
  });

  it("Deberia retornar un error por que ya existe un alquiler para esa moto en la misma fecha", () => {
    //arrange
    const FECHA_ALQUILER = "05/15/2021";
    const FECHA_ENTREGA = "05/17/2021";
    page.navigateTo();
    navBar.clickBotonNavBarAlquileres();
    listarAlquileres.clickBotonEditarAlquilerConidEspecifico();
    browser.sleep(500);
    editarAlquiler.clickInputFechaAlquiler();
    editarAlquiler.setInputFechaAlquiler(FECHA_ALQUILER);
    browser.sleep(500);
    editarAlquiler.clickInputFechaEntrega();
    editarAlquiler.setInputFechaEntrega(FECHA_ENTREGA);
    browser.sleep(500);

    //act
    editarAlquiler.clickBotonRegistrarAlquiler();

    //assert
    const alerta = editarAlquiler.getTextoSwal();

    expect(alerta).toEqual(LA_MOTO_QUE_INTENTA_ALQUILAR_SE_ENCUENTRA_OCUPADA);
    browser.sleep(300);
  });

  it("Deberia retornar un error por que está solicitando la reserva con menos de 2 días de anticipación", () => {
    //arrange
    const fechaActual = new Date();
    const fechaEntrega = new Date();

    const FECHA_ALQUILER = (fechaActual.getMonth()+1)+"/"+fechaActual.getDate()+"/"+fechaActual.getFullYear();

    fechaEntrega.setDate(fechaEntrega.getDate() + 2);

    const FECHA_ENTREGA = (fechaEntrega.getMonth()+1)+"/"+fechaEntrega.getDate()+"/"+fechaEntrega.getFullYear();

    page.navigateTo();
    navBar.clickBotonNavBarAlquileres();
    listarAlquileres.clickBotonEditarAlquilerConidEspecifico();
    browser.sleep(500);
    editarAlquiler.clickInputFechaAlquiler();
    editarAlquiler.setInputFechaAlquiler(FECHA_ALQUILER);
    browser.sleep(500);
    editarAlquiler.clickInputFechaEntrega();
    editarAlquiler.setInputFechaEntrega(FECHA_ENTREGA);
    browser.sleep(200);
    //act
    editarAlquiler.clickBotonRegistrarAlquiler();

    //assert
    const alerta = editarAlquiler.getTextoSwal();

    expect(alerta).toEqual(DEBE_SOLICITAR_SU_ALQUILER_CON_MINIMO_DOS_DIAS_DE_ANTICIPACION);
    browser.sleep(300);
  });

  it("Deberia retornar un error por supera el limite de días (5) de alquiler", () => {
    //arrange

    const FECHA_ALQUILER = "11/11/2021";
    const FECHA_ENTREGA = "11/20/2021";
    page.navigateTo();
    navBar.clickBotonNavBarAlquileres();
    listarAlquileres.clickBotonEditarAlquilerConidEspecifico();
    browser.sleep(500);
    editarAlquiler.clickInputFechaAlquiler();
    editarAlquiler.setInputFechaAlquiler(FECHA_ALQUILER);
    browser.sleep(500);
    editarAlquiler.clickInputFechaEntrega();
    editarAlquiler.setInputFechaEntrega(FECHA_ENTREGA);
    browser.sleep(200);
    editarAlquiler.clickInputIdCliente();
    editarAlquiler.clickOpcionIdCliente(CLASE_CLIENTES);
    browser.sleep(500);
    editarAlquiler.clickInputIdMoto();
    editarAlquiler.clickOpcionIdMoto(CLASE_MOTOS,1);
    browser.sleep(500);
    //act
    editarAlquiler.clickBotonRegistrarAlquiler();

    //assert
    const alerta = editarAlquiler.getTextoSwal();

    expect(alerta).toEqual(LIMITE_DE_DIAS_ALQUILER_SUPERADO);
    browser.sleep(300);
  });
});
