import { by, element, ElementFinder } from "protractor";

export class FormularioAlquiler {
  private botonRegistrarAlquiler = element(by.id("registrar"));
  private inputFechaAlquiler = element(by.id("fechaAlquiler"));
  private inputFechaEntrega = element(by.id("fechaEntrega"));
  private inputIdCliente = element(by.id("idCliente"));
  private inputIdMoto = element(by.id("idMoto"));
  private swal = element(by.className('swal2-html-container'));

  async clickInputFechaAlquiler() {
    await this.inputFechaAlquiler.click();
  }
  async clickInputFechaEntrega() {
    await this.inputFechaEntrega.click();
  }
  async clickInputIdCliente() {
    await this.inputIdCliente.click();
  }
  async clickInputIdMoto() {
    await this.inputIdMoto.click();
  }


  getOpcionIdMoto(claseMotos: string, posicionEnListado: number): ElementFinder {
    return element.all(by.className(claseMotos)).get(posicionEnListado);
  }

  getOpcionIdCliente(claseClientes: string) {
    return element.all(by.className(claseClientes)).first();
  }


  async clickOpcionIdMoto(claseMotos: string, posicionEnListado: number) {
    await this.getOpcionIdMoto(claseMotos,posicionEnListado).click();
  }
  async clickOpcionIdCliente(claseClientes: string) {
    await this.getOpcionIdCliente(claseClientes).click();
  }


  async setInputFechaAlquiler(fechaAlquiler: string) {
    await this.inputFechaAlquiler.sendKeys(fechaAlquiler);
  }
  async setInputFechaEntrega(fechaEntrega: string) {
    await this.inputFechaEntrega.sendKeys(fechaEntrega);
  }

  async limpiarInputFechaAlquiler() {
    await this.inputFechaAlquiler.clear();
  }
  async limpiarInputFechaEntrega() {
    await this.inputFechaEntrega.clear();
  }

  async clickBotonRegistrarAlquiler() {
    await this.botonRegistrarAlquiler.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }
}
