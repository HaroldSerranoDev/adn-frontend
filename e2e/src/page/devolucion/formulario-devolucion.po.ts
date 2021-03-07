import { by, element } from "protractor";

export class FormularioDevolucion {
  private botonRegistrarDevolucion = element(by.id("registrar"));
  private inputIdAlquiler = element(by.id("idCliente"));
  private inputKilometrosFinales = element(by.id("kilometrosFinales"));
  private swal = element(by.className('swal2-html-container'));

  async clickInputIdAlquiler() {
    await this.inputIdAlquiler.click();
  }

  async clickInputKilometrosFinales() {
    await this.inputKilometrosFinales.click();
  }

  getOpcionIdAlquiler(claseAlquileres: string, posicionEnListado: number) {
    return element.all(by.className(claseAlquileres,)).get(posicionEnListado);
  }


  async clickOpcionIdAlquiler(claseAlquileres: string, posicionEnListado: number) {
    await this.getOpcionIdAlquiler(claseAlquileres,posicionEnListado).click();
  }

  async setInputKilometrosFinales(kilometrosFinales: number) {
    await this.inputKilometrosFinales.sendKeys(kilometrosFinales);
  }


  async clickBotonRegistrarDevolucion() {
    await this.botonRegistrarDevolucion.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }
}
