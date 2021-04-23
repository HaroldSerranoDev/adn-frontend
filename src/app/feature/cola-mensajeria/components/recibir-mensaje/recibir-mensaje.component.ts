import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Icon } from "@core/icon.enum";
import { ErroresService } from "@core/services/errores.service";
import { SwalService } from "@core/services/swal.service";
import { ERROR, EXITO } from "@shared/constantes/constantes";
import { ColaMensajeriaService } from "../../shared/service/cola-mensajeria.service";

@Component({
  selector: "app-recibir-mensaje",
  templateUrl: "./recibir-mensaje.component.html",
})
export class RecibirMensajeComponent implements OnInit {
  recibirMensajeForm: FormGroup;

  constructor(
    protected colaMensajeriaService: ColaMensajeriaService,
    protected swalService: SwalService,
    public erroresService: ErroresService
  ) {}

  ngOnInit() {
    this.construirFormularioColaMensajeria();
  }

  private construirFormularioColaMensajeria() {
    this.recibirMensajeForm = new FormGroup({
      nombreCola: new FormControl(null, Validators.required),
    });
  }

  recibir() {
    if (this.recibirMensajeForm.valid) {
      this.colaMensajeriaService
        .consultar(this.recibirMensajeForm.get('nombreCola').value)
        .subscribe(
          (mensaje:any) => {
            this.recibirMensajeForm.reset();
            this.swalService.alert(EXITO, "Su mensaje es: "+ mensaje.cuerpoMensaje, Icon.SUCCESS);
          },
          (error) => {
            this.swalService.alert(ERROR, error.error.mensaje, Icon.ERROR);
          }
        );
    }
  }
}
