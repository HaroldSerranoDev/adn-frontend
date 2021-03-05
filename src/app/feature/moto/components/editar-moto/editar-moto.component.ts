import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Icon } from "@core/icon.enum";
import { ErroresService } from "@core/services/errores.service";
import { SwalService } from "@core/services/swal.service";
import { Moto } from "@moto/shared/model/moto";
import { ERROR, EXITO } from "@shared/constantes/constantes";
import { MotoService } from "../../shared/service/moto.service";


const LA_MOTO_HA_SIDO_ACTUALIZADA = "El moto ha sido actualizado";

@Component({
  selector: "app-editar-moto",
  templateUrl: "./editar-moto.component.html",
})
export class EditarMotoComponent implements OnInit {
  motoForm: FormGroup;
  moto: Moto;

  constructor(
    protected motoService: MotoService,
    protected swalService: SwalService,
    private router: Router,
    public erroresService: ErroresService
  ) {
    this.moto = this.motoService.moto;
  }

  ngOnInit() {
    this.construirFormularioMoto();
  }

  private construirFormularioMoto() {
    this.motoForm = new FormGroup({
      matricula: new FormControl(this.moto?.matricula, Validators.required),
      marca: new FormControl(this.moto?.marca),
      modelo: new FormControl(this.moto?.modelo, Validators.required),
      tipoMoto: new FormControl(this.moto?.tipoMoto, Validators.required),
      kilometrosRecorridos: new FormControl(this.moto?.kilometrosRecorridos),
      precioAlquiler: new FormControl(this.moto?.precioAlquiler),
    });
  }

  actualizar(motoFormExterno: FormGroup) {
    this.motoService
      .actualizar(motoFormExterno.value, this.moto.id)
      .subscribe(
        () => {
          this.swalService.alert(
            EXITO,
            LA_MOTO_HA_SIDO_ACTUALIZADA,
            Icon.SUCCESS
          );
          this.regresar();
        },
        (error) => {
          this.swalService.alert(ERROR, error.mensaje, Icon.ERROR);
        }
      );
  }

  regresar(): void {
    this.motoService.moto = null;
    this.router.navigate(["/motos"]);
  }
}
