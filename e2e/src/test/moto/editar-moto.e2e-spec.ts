import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { FormularioMoto } from "../../page/moto/formulario-moto.po";
import { ListarMotos } from "../../page/moto/listar-motos.po";
import { NavbarPage } from "../../page/navbar/navbar.po";

describe("Crear moto", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarMotos: ListarMotos;
  let editarMoto: FormularioMoto;
  const MATRICULA = "ABC12D";
  const MODELO = 2022;
  const LA_MOTO_HA_SIDO_ACTUALIZADA = "El moto ha sido actualizado";
  const LA_MOTO_YA_EXISTE_EN_EL_SISTEMA = "La moto ya existe en el sistema";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    editarMoto = new FormularioMoto();
    listarMotos = new ListarMotos();
  });

  it("Deberia actualizar Moto", () => {
    //arrange
    page.navigateTo();
    navBar.clickBotonNavBarMotos();
    listarMotos.clickBotonEditarMotoConidEspecifico();
    browser.sleep(500);
    editarMoto.clickInputModelo();
    editarMoto.limpiarInputModelo();
    editarMoto.setInputModelo(MODELO);
    browser.sleep(500);

    //act
    editarMoto.clickBotonRegistrarMoto();

    //assert
    const alerta = editarMoto.getTextoSwal();

    expect(alerta).toEqual(LA_MOTO_HA_SIDO_ACTUALIZADA);
    browser.sleep(300);
  });

  it("Deberia retornar un error por que ya existe una moto con la misma matricula", () => {
    //arrange
    page.navigateTo();
    navBar.clickBotonNavBarMotos();
    listarMotos.clickBotonEditarMotoConidEspecifico();
    browser.sleep(500);
    editarMoto.clickInputMatricula();
    editarMoto.limpiarInputMatricula();
    editarMoto.setInputMatricula(MATRICULA);
    browser.sleep(500);

    //act
    editarMoto.clickBotonRegistrarMoto();

    //assert
    const alerta = editarMoto.getTextoSwal();

    expect(alerta).toEqual(LA_MOTO_YA_EXISTE_EN_EL_SISTEMA);
    browser.sleep(300);
  });
});
