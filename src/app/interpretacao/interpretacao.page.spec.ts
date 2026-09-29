import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterpretacaoPage } from './interpretacao.page';

describe('InterpretacaoPage', () => {
  let component: InterpretacaoPage;
  let fixture: ComponentFixture<InterpretacaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpretacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
