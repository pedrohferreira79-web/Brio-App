import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermologiaPage } from './termologia.page';

describe('TermologiaPage', () => {
  let component: TermologiaPage;
  let fixture: ComponentFixture<TermologiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TermologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
