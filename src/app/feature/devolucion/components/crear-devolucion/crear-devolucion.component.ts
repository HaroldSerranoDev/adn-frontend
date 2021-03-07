import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Icon } from "@core/icon.enum";
import { ErroresService } from "@core/services/errores.service";
import { SwalService } from "@core/services/swal.service";
import { ERROR, EXITO } from "@shared/constantes/constantes";
import { DevolucionService } from "../../shared/service/devolucion.service";

const LA_DEVOLUCION_HA_SIDO_CREADA = "El devolucion ha sido creado.";

@Component({
  selector: "app-crear-devolucion",
  templateUrl: "./crear-devolucion.component.html",
})
export class CrearDevolucionComponent implements OnInit {
  devolucionForm: FormGroup;

  constructor(
    protected devolucionService: DevolucionService,
    protected swalService: SwalService,
    private router: Router,
    public erroresService: ErroresService
  ) {}

  ngOnInit() {
    this.construirFormularioDevolucion();
  }

  private construirFormularioDevolucion() {
    this.devolucionForm = new FormGroup({
      id: new FormControl(0),
      kilometrosFinales: new FormControl(null, Validators.required),
      idAlquiler: new FormControl(null, Validators.required),
    });
  }

  agregar(devolucionFormExterno: FormGroup) {
      this.devolucionService.crear(devolucionFormExterno.value).subscribe(
        () => {
          this.swalService.alert(
            EXITO,
            LA_DEVOLUCION_HA_SIDO_CREADA,
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
    this.router.navigate(["/devoluciones"]);
  }
}
