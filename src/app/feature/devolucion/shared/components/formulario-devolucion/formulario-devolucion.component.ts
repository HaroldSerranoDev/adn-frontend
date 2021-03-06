import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { DevolucionService } from "@devolucion/shared/service/devolucion.service";
import { ErroresService } from "@core/services/errores.service";
import { Alquiler } from "@alquiler/shared/model/alquiler";
import { Observable } from "rxjs";
import { AlquilerService } from "@alquiler/shared/service/alquiler.service";

@Component({
  selector: "app-formulario-devolucion",
  templateUrl: "./formulario-devolucion.component.html",
})
export class FormularioDevolucionComponent implements OnInit {
  @Input() devolucionForm: FormGroup;
  @Input() titulo: String;
  @Output() eventoBotonRegistrar = new EventEmitter();
  alquileres: Observable<Alquiler[]>;

  constructor(
    protected devolucionService: DevolucionService,
    private router: Router,
    public erroresService: ErroresService,
    protected alquilerService: AlquilerService
  ) {}

  ngOnInit() {
    this.alquileres = this.alquilerService.consultar();
  }

  regresar(): void {
    this.devolucionService.devolucion = null;
    this.router.navigate(["/devoluciones"]);
  }

  realizarAccionBotonRegistrar() {
    if (this.devolucionForm.valid) {
      this.eventoBotonRegistrar.emit(this.devolucionForm);
    }
  }
}
