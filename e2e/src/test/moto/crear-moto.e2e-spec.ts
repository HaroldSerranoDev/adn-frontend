import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { NavbarPage } from "../../page/navbar/navbar.po";
import { FormularioMoto } from "../../page/moto/formulario-moto.po";
import { ListarMotos } from "../../page/moto/listar-motos.po";

describe("Crear moto", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarMotos: ListarMotos;
  let crearMoto: FormularioMoto;
  const MATRICULA = "ABC14D";
  const MARCA = "SUZUKI";
  const TIPO_MOTO = "SPORT";
  const MODELO = 2018;
  const KILOMETROS_RECORRIDOS = 0;
  const PRECIO_ALQUILER = 210000;
  const LA_MOTO_HA_SIDO_CREADA = "La moto ha sido creada.";
  const LA_MOTO_YA_EXISTE_EN_LA_SISTEMA = "La moto ya existe en el sistema";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearMoto = new FormularioMoto();
    listarMotos = new ListarMotos();
  });

  it("Deberia crear Moto", () => {
    //arrange
    page.navigateTo();
    navBar.clickBotonNavBarMotos();
    listarMotos.clickBotonCrearMoto();
    browser.sleep(500);
    crearMoto.clickInputMatricula();
    crearMoto.setInputMatricula(MATRICULA);
    browser.sleep(500);
    crearMoto.clickInputMarca();
    browser.sleep(200);
    crearMoto.clickOpcionMarca(MARCA);
    browser.sleep(500);
    crearMoto.clickInputTipoMoto();
    browser.sleep(200);
    crearMoto.clickOpcionTipoMoto(TIPO_MOTO);
    browser.sleep(500);
    crearMoto.clickInputModelo();
    crearMoto.setInputModelo(MODELO);
    browser.sleep(500);
    crearMoto.clickInputKilometrosRecorridos();
    crearMoto.setInputKilometrosRecorridos(KILOMETROS_RECORRIDOS);
    browser.sleep(500);
    crearMoto.clickInputPrecioAlquiler();
    crearMoto.setInputPrecioAlquiler(PRECIO_ALQUILER);
    browser.sleep(500);
    //act
    crearMoto.clickBotonRegistrarMoto();

    //assert
    const alerta = crearMoto.getTextoSwal();

    expect(alerta).toEqual(LA_MOTO_HA_SIDO_CREADA);
    browser.sleep(300);
  });

  it("Deberia retornar un error por que ya existe una moto con la misma matricula", () => {
    //arrange
    page.navigateTo();
    navBar.clickBotonNavBarMotos();
    listarMotos.clickBotonCrearMoto();
    browser.sleep(500);
    crearMoto.clickInputMatricula();
    crearMoto.setInputMatricula(MATRICULA);
    browser.sleep(500);
    crearMoto.clickInputMarca();
    browser.sleep(200);
    crearMoto.clickOpcionMarca(MARCA);
    browser.sleep(500);
    crearMoto.clickInputTipoMoto();
    browser.sleep(200);
    crearMoto.clickOpcionTipoMoto(TIPO_MOTO);
    browser.sleep(500);
    crearMoto.clickInputModelo();
    crearMoto.setInputModelo(MODELO);
    browser.sleep(500);
    crearMoto.clickInputKilometrosRecorridos();
    crearMoto.setInputKilometrosRecorridos(KILOMETROS_RECORRIDOS);
    browser.sleep(500);
    crearMoto.clickInputPrecioAlquiler();
    crearMoto.setInputPrecioAlquiler(PRECIO_ALQUILER);
    browser.sleep(500);
    //act
    crearMoto.clickBotonRegistrarMoto();

    //assert
    const alerta = crearMoto.getTextoSwal();

    expect(alerta).toEqual(LA_MOTO_YA_EXISTE_EN_LA_SISTEMA);
    browser.sleep(300);
  });
});
