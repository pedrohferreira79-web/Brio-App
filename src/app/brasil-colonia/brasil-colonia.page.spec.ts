import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrasilColoniaPage } from './brasil-colonia.page';

describe('BrasilColoniaPage', () => {
  let component: BrasilColoniaPage;
  let fixture: ComponentFixture<BrasilColoniaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasilColoniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
