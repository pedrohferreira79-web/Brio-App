import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalizacaoPage } from './personalizacao.page';

describe('PersonalizacaoPage', () => {
  let component: PersonalizacaoPage;
  let fixture: ComponentFixture<PersonalizacaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
