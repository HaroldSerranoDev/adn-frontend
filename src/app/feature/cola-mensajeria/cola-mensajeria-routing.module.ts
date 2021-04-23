import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaMensajeriaComponent } from './components/cola-mensajeria/cola-mensajeria.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ColaMensajeriaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaMensajeriaRoutingModule { }
