import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SwalService } from "@core/services/swal.service";
import { Devolucion } from "@devolucion/shared/model/devolucion";
import { DevolucionService } from "@devolucion/shared/service/devolucion.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-listar-devolucion",
  templateUrl: "./listar-devolucion.component.html"
})
export class ListarDevolucionComponent implements OnInit {
  public devoluciones: Observable<Devolucion[]>;

  constructor(
    protected devolucionService: DevolucionService,
    private router: Router,
    protected swalService: SwalService
  ) {}

  ngOnInit() {
    this.devoluciones = this.devolucionService.consultar();
  }

  crearDevolucion() {
    this.router.navigate(["/devoluciones/crear"]);
  }
}
