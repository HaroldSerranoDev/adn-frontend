import { by, element } from "protractor";

export class FormularioCliente {
  private botonRegistrarCliente = element(by.id("registrar"));
  private inputNombre = element(by.id("nombre"));
  private inputCorreo = element(by.id("correo"));
  private inputTelefono = element(by.id("telefono"));
  private inputCedula = element(by.id("cedula"));
  private inputDireccion = element(by.id("direccion"));
  private swal = element(by.className('swal2-html-container'));

  async clickInputNombre() {
    await this.inputNombre.click();
  }
  async clickInputCorreo() {
    await this.inputCorreo.click();
  }
  async clickInputTelefono() {
    await this.inputTelefono.click();
  }
  async clickInputCedula() {
    await this.inputCedula.click();
  }
  async clickInputDireccion() {
    await this.inputDireccion.click();
  }

  async setInputNombre(nombre: string) {
    await this.inputNombre.sendKeys(nombre);
  }
  async setInputCorreo(correo: string) {
    await this.inputCorreo.sendKeys(correo);
  }
  async setInputTelefono(telefono: string) {
    await this.inputTelefono.sendKeys(telefono);
  }
  async setInputCedula(cedula: string) {
    await this.inputCedula.sendKeys(cedula);
  }
  async setInputDireccion(direccion: string) {
    await this.inputDireccion.sendKeys(direccion);
  }

  async limpiarInputNombre() {
    await this.inputNombre.clear();
  }

  async limpiarInputCedula() {
    await this.inputCedula.clear();
  }

  async clickBotonRegistrarCliente() {
    await this.botonRegistrarCliente.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }
}
