import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeometriaPage } from './geometria.page';

describe('GeometriaPage', () => {
  let component: GeometriaPage;
  let fixture: ComponentFixture<GeometriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
