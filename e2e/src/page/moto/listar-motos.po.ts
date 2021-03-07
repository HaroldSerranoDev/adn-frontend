import { by, element } from "protractor";

export class ListarMotos {
  private tablaMotos = element.all(by.className("tablaMotos"));
  private botonCrearMoto = element(by.id("linkCrearMoto"));
  private botonEditarMoto = element(by.id("linkEditarMoto2"));
  private botonEliminarMoto = element.all(by.className("linkEliminarMoto"));
  private swal = element(by.className('swal2-html-container'));
  private swalConfirm = element(by.className('swal2-confirm'));


  async contarMotos() {
    return this.tablaMotos.count();
  }

  async clickBotonCrearMoto() {
    await this.botonCrearMoto.click();
  }

  async clickBotonEditarMotoConidEspecifico() {
    await this.botonEditarMoto.click();
  }

  async clickBotonEliminarMoto() {
    await this.botonEliminarMoto.last().click();
  }

  async clickSwalConfirmar() {
    await this.swalConfirm.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }
}
