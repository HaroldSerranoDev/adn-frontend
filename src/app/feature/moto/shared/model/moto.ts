export class Moto {
  id: number;
  matricula: string;
  marca: string;
  modelo: number;
  tipoMoto: string;
  kilometrosRecorridos: number;
  precioAlquiler: number;

  constructor(
    id: number,
    matricula: string,
    marca: string,
    modelo: number,
    tipoMoto: string,
    kilometrosRecorridos: number,
    precioAlquiler: number
  ) {
    this.id = id;
    this.matricula = matricula;
    this.marca = marca;
    this.modelo = modelo;
    this.tipoMoto = tipoMoto;
    this.kilometrosRecorridos = kilometrosRecorridos;
    this.precioAlquiler = precioAlquiler;
  }
}
