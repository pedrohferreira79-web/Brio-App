import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EletricidadePage } from './eletricidade.page';

describe('EletricidadePage', () => {
  let component: EletricidadePage;
  let fixture: ComponentFixture<EletricidadePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EletricidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
