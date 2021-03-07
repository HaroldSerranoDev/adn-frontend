import { by, element, ElementFinder } from "protractor";

export class FormularioMoto {
  private botonRegistrarMoto = element(by.id("registrar"));
  private inputMatricula = element(by.id("matricula"));
  private inputMarca = element(by.id("marca"));
  private inputTipoMoto = element(by.id("tipoMoto"));
  private inputModelo = element(by.id("modelo"));
  private inputKilometrosRecorridos = element(by.id("kilometrosRecorridos"));
  private inputPrecioAlquiler = element(by.id("precioAlquiler"));
  private swal = element(by.className('swal2-html-container'));

  async clickInputMatricula() {
    await this.inputMatricula.click();
  }
  async clickInputMarca() {
    await this.inputMarca.click();
  }
  async clickInputTipoMoto() {
    await this.inputTipoMoto.click();
  }
  async clickInputModelo() {
    await this.inputModelo.click();
  }
  async clickInputKilometrosRecorridos() {
    await this.inputKilometrosRecorridos.click();
  }
  async clickInputPrecioAlquiler() {
    await this.inputPrecioAlquiler.click();
  }


   getOpcionMarca(marca: string): ElementFinder {
    return element(by.className(marca));
  }

  getOpcionTipoMoto(tipoMoto: string) {
    return element(by.className(tipoMoto));
  }


  async clickOpcionMarca(marca: string) {
    await this.getOpcionMarca(marca).click();
  }
  async clickOpcionTipoMoto(tipoMoto: string) {
    await this.getOpcionTipoMoto(tipoMoto).click();
  }


  async setInputMatricula(matricula: string) {
    await this.inputMatricula.sendKeys(matricula);
  }
  async setInputModelo(modelo: number) {
    await this.inputModelo.sendKeys(modelo);
  }
  async setInputKilometrosRecorridos(kilometrosRecorridos: number) {
    await this.inputKilometrosRecorridos.sendKeys(kilometrosRecorridos);
  }
  async setInputPrecioAlquiler(precioAlquiler: number) {
    await this.inputPrecioAlquiler.sendKeys(precioAlquiler);
  }


  async limpiarInputMatricula() {
    await this.inputMatricula.clear();
  }
  async limpiarInputModelo() {
    await this.inputModelo.clear();
  }

  async clickBotonRegistrarMoto() {
    await this.botonRegistrarMoto.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }
}
