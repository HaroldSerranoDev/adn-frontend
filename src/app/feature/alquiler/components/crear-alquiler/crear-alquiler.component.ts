import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Icon } from "@core/icon.enum";
import { ErroresService } from "@core/services/errores.service";
import { SwalService } from "@core/services/swal.service";
import { ERROR, EXITO } from "@shared/constantes/constantes";
import { AlquilerService } from "../../shared/service/alquiler.service";

const EL_ALQUILER_HA_SIDO_CREADO = "El alquiler ha sido creado.";

@Component({
  selector: "app-crear-alquiler",
  templateUrl: "./crear-alquiler.component.html",
})
export class CrearAlquilerComponent implements OnInit {
  alquilerForm: FormGroup;

  constructor(
    protected alquilerService: AlquilerService,
    protected swalService: SwalService,
    private router: Router,
    public erroresService: ErroresService
  ) {}

  ngOnInit() {
    this.construirFormularioAlquiler();
  }

  private construirFormularioAlquiler() {
    this.alquilerForm = new FormGroup({
      id: new FormControl(0),
      fechaAlquiler: new FormControl(null, Validators.required),
      fechaEntrega: new FormControl(null, Validators.required),
      idCliente: new FormControl(null, Validators.required),
      idMoto: new FormControl(null, Validators.required),
    });
  }

  agregar(alquilerFormExterno: FormGroup) {
      this.alquilerService.crear(alquilerFormExterno.value).subscribe(
        () => {
          this.swalService.alert(
            EXITO,
            EL_ALQUILER_HA_SIDO_CREADO,
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
    this.router.navigate(["/alquileres"]);
  }
}
