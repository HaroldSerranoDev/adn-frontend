import { Component, OnInit } from "@angular/core";
import { AlquilerService } from "../../shared/service/alquiler.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Alquiler } from "@alquiler/shared/model/alquiler";
import { SwalService } from "@core/services/swal.service";
import { Router } from "@angular/router";
import { ErroresService } from "@core/services/errores.service";
import { Icon } from "@core/icon.enum";
import { ERROR, EXITO } from "@shared/constantes/constantes";

const EL_ALQUILER_HA_SIDO_ACTUALIZADO = "El alquiler ha sido actualizado";

@Component({
  selector: "app-editar-alquiler",
  templateUrl: "./editar-alquiler.component.html",
})
export class EditarAlquilerComponent implements OnInit {
  alquilerForm: FormGroup;
  alquiler: Alquiler;

  constructor(
    protected alquilerService: AlquilerService,
    protected swalService: SwalService,
    private router: Router,
    public erroresService: ErroresService
  ) {
    this.alquiler = this.alquilerService.alquiler;
  }

  ngOnInit() {
    this.construirFormularioAlquiler();
  }

  private construirFormularioAlquiler() {
    console.log(this.alquiler);
    this.alquilerForm = new FormGroup({
      fechaAlquiler: new FormControl(this.alquiler?.fechaAlquiler, Validators.required),
      fechaEntrega: new FormControl(this.alquiler?.fechaEntrega, Validators.required),
      idCliente: new FormControl(this.alquiler?.cliente.id, Validators.required),
      idMoto: new FormControl(this.alquiler?.moto.id, Validators.required)
    });
  }

  actualizar(alquilerFormExterno: FormGroup) {
    this.alquilerService
      .actualizar(alquilerFormExterno.value, this.alquiler.id)
      .subscribe(
        () => {
          this.swalService.alert(
            EXITO,
            EL_ALQUILER_HA_SIDO_ACTUALIZADO,
            Icon.SUCCESS
          );
          this.regresar();
        },
        (error) => {
          this.swalService.alert(ERROR, error.error.mensaje, Icon.ERROR);
        }
      );
  }

  regresar(): void {
    this.alquilerService.alquiler = null;
    this.router.navigate(["/alquileres"]);
  }
}
