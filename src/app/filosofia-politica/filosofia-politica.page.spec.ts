import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilosofiaPoliticaPage } from './filosofia-politica.page';

describe('FilosofiaPoliticaPage', () => {
  let component: FilosofiaPoliticaPage;
  let fixture: ComponentFixture<FilosofiaPoliticaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FilosofiaPoliticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
