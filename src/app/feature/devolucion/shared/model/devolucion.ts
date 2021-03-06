import { Alquiler } from "@alquiler/shared/model/alquiler";

export class Devolucion {
  id: number;
  kilometrosFinales: number;
  fechaDevolucion: string;
  idAlquiler: number;
  alquiler: Alquiler;
  valorPagoFinal: number;

  constructor(id: number, kilometrosFinales: number, idAlquiler: number) {
    this.id = id;
    this.kilometrosFinales = kilometrosFinales;
    this.idAlquiler = idAlquiler;
  }
}
