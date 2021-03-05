import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ClienteService } from "@cliente/shared/service/cliente.service";
import { ErroresService } from "@core/services/errores.service";

@Component({
  selector: "app-formulario-cliente",
  templateUrl: "./formulario-cliente.component.html",
})
export class FormularioClienteComponent implements OnInit {
  @Input() clienteForm: FormGroup;
  @Input() titulo: String;
  @Output() eventoBotonRegistrar = new EventEmitter();

  constructor(
    protected clienteService: ClienteService,
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
