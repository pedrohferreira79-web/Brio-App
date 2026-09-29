import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcologiaPage } from './ecologia.page';

describe('EcologiaPage', () => {
  let component: EcologiaPage;
  let fixture: ComponentFixture<EcologiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EcologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
