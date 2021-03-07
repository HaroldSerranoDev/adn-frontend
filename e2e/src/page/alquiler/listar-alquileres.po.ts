import { by, element } from "protractor";

export class ListarAlquileres {
  private tablaAlquileres = element.all(by.className("tablaAlquileres"));
  private botonCrearAlquiler = element(by.id("linkCrearAlquiler"));
  private botonEditarAlquiler = element(by.id("linkEditarAlquiler2"));
  private botonEliminarAlquiler = element.all(by.className("linkEliminarAlquiler"));
  private swal = element(by.className('swal2-html-container'));
  private swalConfirm = element(by.className('swal2-confirm'));


  async contarAlquileres() {
    return this.tablaAlquileres.count();
  }

  async clickBotonCrearAlquiler() {
    await this.botonCrearAlquiler.click();
  }

  async clickBotonEditarAlquilerConidEspecifico() {
    await this.botonEditarAlquiler.click();
  }

  async clickBotonEliminarAlquiler() {
    await this.botonEliminarAlquiler.last().click();
  }

  async clickSwalConfirmar() {
    await this.swalConfirm.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }
}
