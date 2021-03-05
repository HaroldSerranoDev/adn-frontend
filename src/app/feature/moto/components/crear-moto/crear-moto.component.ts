import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Icon } from "@core/icon.enum";
import { ErroresService } from "@core/services/errores.service";
import { SwalService } from "@core/services/swal.service";
import { ERROR, EXITO } from "@shared/constantes/constantes";
import { MotoService } from "../../shared/service/moto.service";

const LA_MOTO_HA_SIDO_CREADA = "La moto ha sido creada.";

@Component({
  selector: "app-crear-moto",
  templateUrl: "./crear-moto.component.html",
})
export class CrearMotoComponent implements OnInit {
  motoForm: FormGroup;

  constructor(
    protected motoService: MotoService,
    protected swalService: SwalService,
    private router: Router,
    public erroresService: ErroresService
  ) {}

  ngOnInit() {
    this.construirFormularioMoto();
  }

  private construirFormularioMoto() {
    this.motoForm = new FormGroup({
      id: new FormControl(0),
      matricula: new FormControl(null, Validators.required),
      marca: new FormControl(null, Validators.required),
      modelo: new FormControl(null, Validators.required),
      tipoMoto: new FormControl(null, Validators.required),
      kilometrosRecorridos: new FormControl(null, Validators.required),
      precioAlquiler: new FormControl(null, Validators.required),
    });
  }

  agregar(motoFormExterno: FormGroup) {
      this.motoService.crear(motoFormExterno.value).subscribe(
        () => {
          this.swalService.alert(
            EXITO,
            LA_MOTO_HA_SIDO_CREADA,
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
    this.router.navigate(["/motos"]);
  }
}
