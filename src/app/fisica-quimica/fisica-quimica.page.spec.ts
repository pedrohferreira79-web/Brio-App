import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FisicaQuimicaPage } from './fisica-quimica.page';

describe('FisicaQuimicaPage', () => {
  let component: FisicaQuimicaPage;
  let fixture: ComponentFixture<FisicaQuimicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FisicaQuimicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
