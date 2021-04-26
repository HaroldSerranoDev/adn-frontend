import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Icon } from "@core/icon.enum";
import { ErroresService } from "@core/services/errores.service";
import { SwalService } from "@core/services/swal.service";
import { ERROR } from "@shared/constantes/constantes";
import { saveAs } from "file-saver";
import { ArchivoService } from "../../shared/service/archivo.service";

@Component({
  selector: "app-recibir-archivo",
  templateUrl: "./recibir-archivo.component.html",
})
export class RecibirArchivoComponent implements OnInit {
  recibiArchivoForm: FormGroup;

  constructor(
    protected archivoService: ArchivoService,
    protected swalService: SwalService,
    public erroresService: ErroresService
  ) {}

  ngOnInit() {
    this.construirFormularioColaMensajeria();
  }

  private construirFormularioColaMensajeria() {
    this.recibiArchivoForm = new FormGroup({
      nombreArchivo: new FormControl(null, Validators.required),
    });
  }

  recibir() {
    if (this.recibiArchivoForm.valid) {
      const nombreArchivo = this.recibiArchivoForm.get("nombreArchivo").value;
      this.archivoService.consultar(nombreArchivo).subscribe(
        (imagen: any) => {
          this.recibiArchivoForm.reset();
          const file = new File([imagen], nombreArchivo, { type: 'application/vnd.ms.excel' });
          saveAs(file);
        },
        (error) => {
          this.swalService.alert(ERROR, error.error.mensaje, Icon.ERROR);
        }
      );
    }
  }
}
