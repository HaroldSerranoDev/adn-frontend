import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivoComponent } from './components/archivo/archivo.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ArchivoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchivoRoutingModule { }
