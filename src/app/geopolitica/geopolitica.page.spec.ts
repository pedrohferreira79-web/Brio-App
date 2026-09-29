import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeopoliticaPage } from './geopolitica.page';

describe('GeopoliticaPage', () => {
  let component: GeopoliticaPage;
  let fixture: ComponentFixture<GeopoliticaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeopoliticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
