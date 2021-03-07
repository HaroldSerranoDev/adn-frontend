import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { FormularioDevolucion } from "../../page/devolucion/formulario-devolucion.po";
import { ListarDevoluciones } from "../../page/devolucion/listar-devoluciones.po";

describe("Crear devolucion", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarDevoluciones: ListarDevoluciones;
  let crearDevolucion: FormularioDevolucion;
  const CLASE_ALQUILERES = "alquileres";
  const LA_DEVOLUCION_HA_SIDO_CREADA = "El devolucion ha sido creado.";
  const LA_DEVOLUCION_QUE_INTENTA_REALIZAR_YA_EXISTE = "La devolucion que intenta realizar ya existe";



  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearDevolucion = new FormularioDevolucion();
    listarDevoluciones = new ListarDevoluciones();
  });

  it("Deberia crear devolucion sin costo adicional", () => {
    //arrange
    const KILOMETROS_FINALES = 150;
    const VALOR_PAGO_FINAL = "$287,500.00";

    page.navigateTo();
    navBar.clickBotonNavBarDevoluciones();
    listarDevoluciones.clickBotonCrearDevolucion();
    browser.sleep(500);
    crearDevolucion.clickInputIdAlquiler();
    crearDevolucion.clickOpcionIdAlquiler(CLASE_ALQUILERES,0);
    browser.sleep(500);
    crearDevolucion.clickInputKilometrosFinales;
    crearDevolucion.setInputKilometrosFinales (KILOMETROS_FINALES);
    browser.sleep(500);
    //act
    crearDevolucion.clickBotonRegistrarDevolucion();
    browser.sleep(500);
    //assert
    const alerta = crearDevolucion.getTextoSwal();

    expect(alerta).toEqual(LA_DEVOLUCION_HA_SIDO_CREADA);
    navBar.clickBotonNavBarDevoluciones();
    expect(listarDevoluciones.getValorAPagar(0)).toEqual(VALOR_PAGO_FINAL);
    browser.sleep(300);
  });

  it("Deberia crear devolucion con costo adicional", () => {
    //arrange
    const KILOMETROS_FINALES = 600;
    const VALOR_PAGO_FINAL = "$275,000.00";

    page.navigateTo();
    navBar.clickBotonNavBarDevoluciones();
    listarDevoluciones.clickBotonCrearDevolucion();
    browser.sleep(500);
    crearDevolucion.clickInputIdAlquiler();
    crearDevolucion.clickOpcionIdAlquiler(CLASE_ALQUILERES,1);
    browser.sleep(500);
    crearDevolucion.clickInputKilometrosFinales;
    crearDevolucion.setInputKilometrosFinales (KILOMETROS_FINALES);
    browser.sleep(500);
    //act
    crearDevolucion.clickBotonRegistrarDevolucion();
    browser.sleep(500);
    //assert
    const alerta = crearDevolucion.getTextoSwal();

    expect(alerta).toEqual(LA_DEVOLUCION_HA_SIDO_CREADA);
    navBar.clickBotonNavBarDevoluciones();

    expect(listarDevoluciones.getValorAPagar(1)).toEqual(VALOR_PAGO_FINAL);
    browser.sleep(300);
  });

  it("Deberia generar un error por que ya existe una devolucion para ese alquiler", () => {
    //arrange
    const KILOMETROS_FINALES = 980;

    page.navigateTo();
    navBar.clickBotonNavBarDevoluciones();
    listarDevoluciones.clickBotonCrearDevolucion();
    browser.sleep(500);
    crearDevolucion.clickInputIdAlquiler();
    crearDevolucion.clickOpcionIdAlquiler(CLASE_ALQUILERES,0);
    browser.sleep(500);
    crearDevolucion.clickInputKilometrosFinales;
    crearDevolucion.setInputKilometrosFinales (KILOMETROS_FINALES);
    browser.sleep(500);
    //act
    crearDevolucion.clickBotonRegistrarDevolucion();
    browser.sleep(500);
    //assert
    const alerta = crearDevolucion.getTextoSwal();

    expect(alerta).toEqual(LA_DEVOLUCION_QUE_INTENTA_REALIZAR_YA_EXISTE);
    browser.sleep(300);
  });
});
