import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesafioMatematicaPage } from './desafio-matematica.page';

describe('DesafioMatematicaPage', () => {
  let component: DesafioMatematicaPage;
  let fixture: ComponentFixture<DesafioMatematicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DesafioMatematicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
