import { by, element } from "protractor";

export class ListarDevoluciones {
  private tablaDevoluciones = element.all(by.className("tablaDevoluciones"));
  private botonCrearDevolucion = element(by.id("linkCrearDevolucion"));
  private valoresAPagar = element.all(by.className("valorPagoFinal"));
  private swal = element(by.className('swal2-html-container'));
  private swalConfirm = element(by.className('swal2-confirm'));


  async contarDevoluciones() {
    return this.tablaDevoluciones.count();
  }

  async clickBotonCrearDevolucion() {
    await this.botonCrearDevolucion.click();
  }

  async clickSwalConfirmar() {
    await this.swalConfirm.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }

  async getValorAPagar(posicionElemento: number): Promise<string> {
    return await this.valoresAPagar.get(posicionElemento).getText();
  }
}
