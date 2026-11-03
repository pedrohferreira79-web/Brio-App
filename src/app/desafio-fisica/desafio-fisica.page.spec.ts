import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesafioFisicaPage } from './desafio-fisica.page';

describe('DesafioFisicaPage', () => {
  let component: DesafioFisicaPage;
  let fixture: ComponentFixture<DesafioFisicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioFisicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
