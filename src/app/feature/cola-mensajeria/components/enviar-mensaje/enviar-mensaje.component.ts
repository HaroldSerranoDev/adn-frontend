import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Icon } from "@core/icon.enum";
import { ErroresService } from "@core/services/errores.service";
import { SwalService } from "@core/services/swal.service";
import { ERROR, EXITO } from "@shared/constantes/constantes";
import { ColaMensajeriaService } from "../../shared/service/cola-mensajeria.service";

const EL_MENSAJE_HA_SIDO_PUBLICADO = "El mensaje ha sido publicado.";

@Component({
  selector: "app-enviar-mensaje",
  templateUrl: "./enviar-mensaje.component.html",
})
export class EnviarMensajeComponent implements OnInit {
  enviarMensajeForm: FormGroup;

  constructor(
    protected colaMensajeriaService: ColaMensajeriaService,
    protected swalService: SwalService,
    public erroresService: ErroresService
  ) {}

  ngOnInit() {
    this.construirFormularioColaMensajeria();
  }

  private construirFormularioColaMensajeria() {
    this.enviarMensajeForm = new FormGroup({
      mensaje: new FormControl(null, Validators.required),
    });
  }

  enviar() {
    if (this.enviarMensajeForm.valid) {
      this.colaMensajeriaService.enviar(this.enviarMensajeForm.value).subscribe(
        () => {
          this.enviarMensajeForm.reset();
          this.swalService.alert(
            EXITO,
            EL_MENSAJE_HA_SIDO_PUBLICADO,
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
