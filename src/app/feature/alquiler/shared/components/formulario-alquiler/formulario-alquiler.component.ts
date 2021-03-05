import { AlquilerService } from "@alquiler/shared/service/alquiler.service";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Cliente } from "@cliente/shared/model/cliente";
import { ClienteService } from "@cliente/shared/service/cliente.service";
import { ErroresService } from "@core/services/errores.service";
import { Moto } from "@moto/shared/model/moto";
import { MotoService } from "@moto/shared/service/moto.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-formulario-alquiler",
  templateUrl: "./formulario-alquiler.component.html",
})
export class FormularioAlquilerComponent implements OnInit {
  @Input() alquilerForm: FormGroup;
  @Input() titulo: String;
  @Output() eventoBotonRegistrar = new EventEmitter();
  clientes: Observable<Cliente[]>;
  motos: Observable<Moto[]>;

  constructor(
    protected alquilerService: AlquilerService,
    private router: Router,
    public erroresService: ErroresService,
    protected clienteService: ClienteService,
    protected motoService: MotoService
  ) {}

  ngOnInit() {
    this.clientes = this.clienteService.consultar();
    this.motos = this.motoService.consultar();
  }

  regresar(): void {
    this.alquilerService.alquiler = null;
    this.router.navigate(["/alquileres"]);
  }

  realizarAccionBotonRegistrar() {
    if (this.alquilerForm.valid) {
      this.eventoBotonRegistrar.emit(this.alquilerForm);
    }
  }
}
