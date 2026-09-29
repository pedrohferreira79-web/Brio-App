import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncoesPage } from './funcoes.page';

describe('FuncoesPage', () => {
  let component: FuncoesPage;
  let fixture: ComponentFixture<FuncoesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
