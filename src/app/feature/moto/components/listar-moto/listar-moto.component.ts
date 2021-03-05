import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Moto } from "@moto/shared/model/moto";
import { MotoService } from "@moto/shared/service/moto.service";
import { Router } from "@angular/router";
import { SwalService } from "@core/services/swal.service";
import { Icon } from "@core/icon.enum";
import { CANCELAR, CONFIRMAR, ERROR, EXITO } from "@shared/constantes/constantes";

const LA_MOTO_HA_SIDO_ELIMINADO = "La moto ha sido eliminada";
const ESTA_SEGURO_QUE_DESEA_ELIMINAR_LA_MOTO =
  "¿Está seguro que desea eliminar la moto?";
const ELIMINACION_DE_CLIENTE = "Eliminación de moto";

@Component({
  selector: "app-listar-moto",
  templateUrl: "./listar-moto.component.html"
})
export class ListarMotoComponent implements OnInit {
  public motos: Observable<Moto[]>;

  constructor(
    protected motoService: MotoService,
    private router: Router,
    protected swalService: SwalService
  ) {}

  ngOnInit() {
    this.motos = this.motoService.consultar();
  }

  crearMoto() {
    this.router.navigate(["/motos/crear"]);
  }

  actualizarMoto(moto: Moto) {
    this.motoService.moto = moto;
    this.router.navigate(["/motos/editar"]);
  }

  borrarMoto(idMoto: number) {
    this.swalService.confirm(
      ELIMINACION_DE_CLIENTE,
      ESTA_SEGURO_QUE_DESEA_ELIMINAR_LA_MOTO,
      Icon.WARNING,
      CONFIRMAR,
      CANCELAR,
      {
        clickConfirm: () => {
          this.motoService.eliminar(idMoto).subscribe(
            () => {
              this.motos = this.motoService.consultar();
              this.swalService.alert(
                EXITO,
                LA_MOTO_HA_SIDO_ELIMINADO,
                Icon.SUCCESS
              );
            },
            (error) => {
              this.swalService.alert(ERROR, error.mensaje, Icon.ERROR);
            }
          );
        },
      }
    );
  }
}
