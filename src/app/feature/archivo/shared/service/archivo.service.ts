import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpService } from "@core-service/http.service";
import { environment } from "src/environments/environment";

@Injectable()
export class ArchivoService {
  urlArchivos: string = "/archivo";

  constructor(protected http: HttpService, private httpClient: HttpClient) {}

  public consultar(nombreArchivo: String) {
    return this.httpClient.get(`${environment.endpoint}${this.urlArchivos}?nombreArchivo=${nombreArchivo}`,  { responseType: 'blob' });
  }

  public enviar(archivo: File) {
    let archivoEnviar = new FormData();
    archivoEnviar.append("archivo", archivo);
    return this.httpClient.post<any>(
      `${environment.endpoint}${this.urlArchivos}`,
      archivoEnviar
    );
  }
}
