export class Cliente {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  cedula: string;
  correo: string;

  constructor(
    id: number,
    nombre: string,
    direccion: string,
    telefono: string,
    cedula: string,
    correo: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.cedula = cedula;
    this.correo = correo;
  }
}
