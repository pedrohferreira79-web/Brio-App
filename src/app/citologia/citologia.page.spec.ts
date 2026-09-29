import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitologiaPage } from './citologia.page';

describe('CitologiaPage', () => {
  let component: CitologiaPage;
  let fixture: ComponentFixture<CitologiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CitologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
