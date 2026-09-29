import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgebraPage } from './algebra.page';

describe('AlgebraPage', () => {
  let component: AlgebraPage;
  let fixture: ComponentFixture<AlgebraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgebraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
