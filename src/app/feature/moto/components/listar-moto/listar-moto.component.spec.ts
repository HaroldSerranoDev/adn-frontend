import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarMotoComponent } from './listar-moto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MotoService } from '../../shared/service/moto.service';
import { Moto } from '../../shared/model/moto';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarMotoComponent', () => {
  let component: ListarMotoComponent;
  let fixture: ComponentFixture<ListarMotoComponent>;
  let motoService: MotoService;
  const listaMotos: Moto[] = [new Moto(1,"test","calle 13","12345","16587458","test@gmail.com")];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMotoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [MotoService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMotoComponent);
    component = fixture.componentInstance;
    motoService = TestBed.inject(MotoService);
    spyOn(motoService, 'consultar').and.returnValue(
      of(listaMotos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  //   component.listaMotos.subscribe(resultado => {
  //     expect(2).toBe(resultado.length);
  // });
});

});
