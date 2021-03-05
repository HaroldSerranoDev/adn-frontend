import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Cliente } from "@cliente/shared/model/cliente";
import { ClienteService } from "@cliente/shared/service/cliente.service";
import { ErroresService } from "@core/services/errores.service";
import { SwalService } from "@core/services/swal.service";

// const EL_CLIENTE_HA_SIDO_ACUTALIZADO = "El cliente ha sido actualizado";
// const EXITO = "Éxito";
// const ERROR = "Error";

@Component({
  selector: "app-formulario-cliente",
  templateUrl: "./formulario-cliente.component.html",
})
export class FormularioClienteComponent implements OnInit {
  @Input() clienteForm: FormGroup;
  @Input() titulo: String;
  @Output() eventoBotonRegistrar = new EventEmitter();

  cliente: Cliente;

  constructor(
    protected clienteService: ClienteService,
    protected swalService: SwalService,
    private router: Router,
    public erroresService: ErroresService
  ) {}

  ngOnInit() {}

  regresar(): void {
    this.clienteService.cliente = null;
    this.router.navigate(["/clientes"]);
  }

  realizarAccionBotonRegistrar() {
    if(this.clienteForm.valid){
      this.eventoBotonRegistrar.emit(this.clienteForm);
    }
  }
}
