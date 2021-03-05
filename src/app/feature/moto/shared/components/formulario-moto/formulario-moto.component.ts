import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ErroresService } from "@core/services/errores.service";
import { MotoService } from "@moto/shared/service/moto.service";

@Component({
  selector: "app-formulario-moto",
  templateUrl: "./formulario-moto.component.html",
})
export class FormularioMotoComponent implements OnInit {
  @Input() motoForm: FormGroup;
  @Input() titulo: String;
  @Output() eventoBotonRegistrar = new EventEmitter();

  constructor(
    protected motoService: MotoService,
    private router: Router,
    public erroresService: ErroresService
  ) {}

  ngOnInit() {}

  regresar(): void {
    this.motoService.moto = null;
    this.router.navigate(["/motos"]);
  }

  realizarAccionBotonRegistrar() {
    if (this.motoForm.valid) {
      this.eventoBotonRegistrar.emit(this.motoForm);
    }
  }
}
