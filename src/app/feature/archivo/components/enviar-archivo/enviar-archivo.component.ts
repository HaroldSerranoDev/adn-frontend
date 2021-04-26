import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Icon } from "@core/icon.enum";
import { ErroresService } from "@core/services/errores.service";
import { SwalService } from "@core/services/swal.service";
import { ERROR, EXITO } from "@shared/constantes/constantes";
import { ArchivoService } from "../../shared/service/archivo.service";

const EL_ARCHIVO_HA_SIDO_ENVIADO = "El archivo ha sido enviado";

@Component({
  selector: "app-enviar-archivo",
  templateUrl: "./enviar-archivo.component.html",
})
export class EnviarArchivoComponent implements OnInit {
  enviarArchivoForm: FormGroup;
  archivo;

  constructor(
    protected archivoService: ArchivoService,
    protected swalService: SwalService,
    public erroresService: ErroresService
  ) {}

  ngOnInit() {
    this.construirFormularioColaMensajeria();
  }

  private construirFormularioColaMensajeria() {
    this.enviarArchivoForm = new FormGroup({
      archivo: new FormControl(null, Validators.required),
    });
  }

  cambioInputFile(evento){
    this.archivo = evento.target.files[0];
  }

  enviar() {
    if (this.enviarArchivoForm.valid) {
      this.archivoService.enviar(this.archivo).subscribe(
        () => {
          this.enviarArchivoForm.reset();
          this.swalService.alert(
            EXITO,
            EL_ARCHIVO_HA_SIDO_ENVIADO,
            Icon.SUCCESS
          );
        },
        (error) => {
          this.swalService.alert(ERROR, error.error.mensaje, Icon.ERROR);
        }
      );
    }
  }
}
