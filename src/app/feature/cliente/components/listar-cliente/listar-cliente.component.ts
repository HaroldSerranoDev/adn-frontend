import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "@cliente/shared/model/cliente";
import { ClienteService } from "@cliente/shared/service/cliente.service";
import { Router } from "@angular/router";
import { SwalService } from "@core/services/swal.service";
import { Icon } from "@core/icon.enum";
import { CONFIRMAR, CANCELAR, EXITO, ERROR } from "@shared/constantes/constantes";

const EL_CLIENTE_HA_SIDO_ELIMINADO = "El cliente ha sido eliminado";
const ESTA_SEGURO_QUE_DESEA_ELIMINAR_EL_CLIENTE =
  "¿Está seguro que desea eliminar el cliente?";
const ELIMINACION_DE_CLIENTE = "Eliminación de cliente";

@Component({
  selector: "app-listar-cliente",
  templateUrl: "./listar-cliente.component.html"
})
export class ListarClienteComponent implements OnInit {
  public clientes: Observable<Cliente[]>;

  constructor(
    protected clienteService: ClienteService,
    private router: Router,
    protected swalService: SwalService
  ) {}

  ngOnInit() {
    this.clientes = this.clienteService.consultar();
  }

  crearCliente() {
    this.router.navigate(["/clientes/crear"]);
  }

  actualizarCliente(cliente: Cliente) {
    this.clienteService.cliente = cliente;
    this.router.navigate(["/clientes/editar"]);
  }

  borrarCliente(idCliente: number) {
    this.swalService.confirm(
      ELIMINACION_DE_CLIENTE,
      ESTA_SEGURO_QUE_DESEA_ELIMINAR_EL_CLIENTE,
      Icon.WARNING,
      CONFIRMAR,
      CANCELAR,
      {
        clickConfirm: () => {
          this.clienteService.eliminar(idCliente).subscribe(
            () => {
              this.clientes = this.clienteService.consultar();
              this.swalService.alert(
                EXITO,
                EL_CLIENTE_HA_SIDO_ELIMINADO,
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
