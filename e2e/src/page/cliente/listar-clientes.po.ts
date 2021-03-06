import { by, element } from "protractor";

export class ListarClientes {
  private tablaClientes = element.all(by.className("tablaClientes"));
  private botonCrearCliente = element(by.id("linkCrearCliente"));
  private botonEditarCliente = element(by.id("linkEditarCliente2"));
  private botonEliminarCliente = element.all(by.className("linkEliminarCliente"));
  private swal = element(by.className('swal2-html-container'));
  private swalConfirm = element(by.className('swal2-confirm'));


  async contarClientes() {
    return this.tablaClientes.count();
  }

  async clickBotonCrearCliente() {
    await this.botonCrearCliente.click();
  }

  async clickBotonEditarClienteConidEspecifico() {
    await this.botonEditarCliente.click();
  }

  async clickBotonEliminarCliente() {
    await this.botonEliminarCliente.last().click();
  }

  async clickSwalConfirmar() {
    await this.swalConfirm.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }
}
