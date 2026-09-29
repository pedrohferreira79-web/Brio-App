import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuimicaOrganicaPage } from './quimica-organica.page';

describe('QuimicaOrganicaPage', () => {
  let component: QuimicaOrganicaPage;
  let fixture: ComponentFixture<QuimicaOrganicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuimicaOrganicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
