import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MecanicaPage } from './mecanica.page';

describe('MecanicaPage', () => {
  let component: MecanicaPage;
  let fixture: ComponentFixture<MecanicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
