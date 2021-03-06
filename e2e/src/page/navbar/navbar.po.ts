import { by, element } from "protractor";

export class NavbarPage {
  private botonClientes = element(by.id("clientesNav"));
  private botonMotos = element(by.id("motosNav"));
  private botonAlquilres = element(by.id("alquileresNav"));
  private botonDevoluciones = element(by.id("devolucionesNav"));

  async clickBotonNavBarClientes() {
    await this.botonClientes.click();
  }

  async clickBotonNavBarMotos() {
    await this.botonMotos.click();
  }
  async clickBotonNavBarAlquileres() {
    await this.botonAlquilres.click();
  }
  async clickBotonNavBarDevoluciones() {
    await this.botonDevoluciones.click();
  }
}
