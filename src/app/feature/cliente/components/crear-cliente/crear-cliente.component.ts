import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Icon } from "@core/icon.enum";
import { ErroresService } from "@core/services/errores.service";
import { SwalService } from "@core/services/swal.service";
import { ERROR, EXITO } from "@shared/constantes/constantes";
import { ClienteService } from "../../shared/service/cliente.service";

const EL_CLIENTE_HA_SIDO_CREADO = "El cliente ha sido creado.";

@Component({
  selector: "app-crear-cliente",
  templateUrl: "./crear-cliente.component.html",
})
export class CrearClienteComponent implements OnInit {
  clienteForm: FormGroup;

  constructor(
    protected clienteService: ClienteService,
    protected swalService: SwalService,
    private router: Router,
    public erroresService: ErroresService
  ) {}

  ngOnInit() {
    this.construirFormularioCliente();
  }

  private construirFormularioCliente() {
    this.clienteForm = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      direccion: new FormControl(null),
      telefono: new FormControl(null, Validators.required),
      cedula: new FormControl(null, Validators.required),
      correo: new FormControl(null),
    });
  }

  agregar(clienteFormExterno: FormGroup) {
      this.clienteService.crear(clienteFormExterno.value).subscribe(
        () => {
          this.swalService.alert(
            EXITO,
            EL_CLIENTE_HA_SIDO_CREADO,
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
    this.router.navigate(["/clientes"]);
  }
}
