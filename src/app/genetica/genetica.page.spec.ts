import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneticaPage } from './genetica.page';

describe('GeneticaPage', () => {
  let component: GeneticaPage;
  let fixture: ComponentFixture<GeneticaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
