import { Component, OnInit } from "@angular/core";
import { ClienteService } from "../../shared/service/cliente.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Cliente } from "@cliente/shared/model/cliente";
import { SwalService } from "@core/services/swal.service";
import { Router } from "@angular/router";
import { ErroresService } from "@core/services/errores.service";
import { Icon } from "@core/icon.enum";

const EL_CLIENTE_HA_SIDO_ACTUALIZADO = "El cliente ha sido actualizado";
const EXITO = "Éxito";
const ERROR = "Error";

@Component({
  selector: "app-editar-cliente",
  templateUrl: "./editar-cliente.component.html",
})
export class EditarClienteComponent implements OnInit {
  clienteForm: FormGroup;
  cliente: Cliente;

  constructor(
    protected clienteService: ClienteService,
    protected swalService: SwalService,
    private router: Router,
    public erroresService: ErroresService
  ) {
    this.cliente = this.clienteService.cliente;
  }

  ngOnInit() {
    this.construirFormularioCliente();
  }

  private construirFormularioCliente() {
    this.clienteForm = new FormGroup({
      nombre: new FormControl(this.cliente?.nombre, Validators.required),
      direccion: new FormControl(this.cliente?.direccion),
      telefono: new FormControl(this.cliente?.telefono, Validators.required),
      cedula: new FormControl(this.cliente?.cedula, Validators.required),
      correo: new FormControl(this.cliente?.correo),
    });
  }

  actualizar(clienteFormExterno: FormGroup) {
    this.clienteService
      .actualizar(clienteFormExterno.value, this.cliente.id)
      .subscribe(
        () => {
          this.swalService.alert(
            EXITO,
            EL_CLIENTE_HA_SIDO_ACTUALIZADO,
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
    this.clienteService.cliente = null;
    this.router.navigate(["/clientes"]);
  }
}
