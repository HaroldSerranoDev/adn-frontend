import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Alquiler } from "@alquiler/shared/model/alquiler";
import { AlquilerService } from "@alquiler/shared/service/alquiler.service";
import { Router } from "@angular/router";
import { SwalService } from "@core/services/swal.service";
import { Icon } from "@core/icon.enum";
import { CONFIRMAR, CANCELAR, EXITO, ERROR } from "@shared/constantes/constantes";

const EL_ALQUILER_HA_SIDO_ELIMINADO = "El alquiler ha sido eliminado";
const ESTA_SEGURO_QUE_DESEA_ELIMINAR_EL_ALQUILER =
  "¿Está seguro que desea eliminar el alquiler?";
const ELIMINACION_DE_ALQUILER = "Eliminación de alquiler";

@Component({
  selector: "app-listar-alquiler",
  templateUrl: "./listar-alquiler.component.html"
})
export class ListarAlquilerComponent implements OnInit {
  public alquilers: Observable<Alquiler[]>;

  constructor(
    protected alquilerService: AlquilerService,
    private router: Router,
    protected swalService: SwalService
  ) {}

  ngOnInit() {
    this.alquilers = this.alquilerService.consultar();
  }

  crearAlquiler() {
    this.router.navigate(["/alquileres/crear"]);
  }

  actualizarAlquiler(alquiler: Alquiler) {
    this.alquilerService.alquiler = alquiler;
    this.router.navigate(["/alquileres/editar"]);
  }

  borrarAlquiler(idAlquiler: number) {
    this.swalService.confirm(
      ELIMINACION_DE_ALQUILER,
      ESTA_SEGURO_QUE_DESEA_ELIMINAR_EL_ALQUILER,
      Icon.WARNING,
      CONFIRMAR,
      CANCELAR,
      {
        clickConfirm: () => {
          this.alquilerService.eliminar(idAlquiler).subscribe(
            () => {
              this.alquilers = this.alquilerService.consultar();
              this.swalService.alert(
                EXITO,
                EL_ALQUILER_HA_SIDO_ELIMINADO,
                Icon.SUCCESS
              );
            },
            (error) => {
              this.swalService.alert(ERROR, error.error.mensaje, Icon.ERROR);
            }
          );
        },
      }
    );
  }
}
