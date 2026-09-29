import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeografiaFisicaPage } from './geografia-fisica.page';

describe('GeografiaFisicaPage', () => {
  let component: GeografiaFisicaPage;
  let fixture: ComponentFixture<GeografiaFisicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeografiaFisicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
